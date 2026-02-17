import { SubscribeMessage, WebSocketGateway, WebSocketServer ,OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { BattlesService } from './battles.service';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();


@WebSocketGateway({cors: {origin: '*'}})
export class BattlesGateway implements OnGatewayConnection, OnGatewayDisconnect{
  
  @WebSocketServer()
  io: Server;
  
  constructor(private jwtService: JwtService, private battlesService: BattlesService){}
  //Gestion de conexion
  async handleConnection(client: Socket) {
    try{
      const token = client.handshake.headers.authorization?.split(' ')[1];
      
      if(!token ){
        throw new Error('Token no encontrado');
      }

      const payload = this.jwtService.verify(token, {
        secret:  config.get<string>('JWT_SECRET')
      });

      client.data.user = payload

      console.log(`🔵Cliente conectado: ${payload.email} (${client.id})`)
    } catch(error){
      console.log(`🔴La conexion ha sido rechadaza: `, error.message);
      client.disconnect();
    }
  }

  handleDisconnect(client: any) {
    console.log(`🔴Cliente desconectado: ${client.data.user.email} (${client.id})`);
  }
  
  @SubscribeMessage('join_battle')
  async handleJoinBattle(
    @ConnectedSocket() client: Socket,
    @MessageBody() battleId: number,
  ){
    try{
      const battle = await this.battlesService.findOne(+battleId);
      if(!battle){
        throw new Error('Batalla no encontrada');
      }
      console.log("los datos del usuario son: ",client.data.user)
      const roomId = `battle_${battleId}`;
      client.join(roomId);
      this.io.to(roomId).emit('battle_log', `El usuario ${client.data.user.nickname} se ha unido a la batalla ${battleId}`);
      
      return{ event: 'joined', message: `Te has unido a la batalla: ${battleId}`};
    }catch(error){
      console.log('Error al unirse a la batalla: ',error.message);
      client.emit('battle_error', error.message);
    }
  }
  
  @SubscribeMessage('start_battle')
  async handleStartBattle(@ConnectedSocket() client: Socket, @MessageBody() data: any){
    // Continuar mañana
  }


  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }


}
