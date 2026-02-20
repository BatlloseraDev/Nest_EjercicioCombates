import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { BattlesService } from './battles.service';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();


@WebSocketGateway({ cors: { origin: '*' } })
export class BattlesGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  io: Server;

  constructor(private jwtService: JwtService, private battlesService: BattlesService) { }
  //Gestion de conexion
  async handleConnection(client: Socket) {
    try {

      const token = client.handshake.auth?.token || client.handshake.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new Error('Token no encontrado');
      }

      const payload = this.jwtService.verify(token, {
        secret: config.get<string>('JWT_SECRET')
      });

      client.data.user = payload

      console.log(`🔵Cliente conectado: ${payload.email} (${client.id})`)
    } catch (error) {
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
    @MessageBody() data: { battleId: number }
  ) {
    try {

      const roomId = `battle_${data.battleId}`;
      await client.join(roomId);


      const battleState = await this.battlesService.initializeBattleState(+data.battleId);

      if (!battleState) {
        throw new Error('Batalla no encontrada');
      }

      // El servicio ahora nos dice si falta alguien
      if (battleState.status === 'PENDING') {
        client.emit('battle_wait', { message: 'Esperando a que entre un oponente...' });
      } else {
        // Si está en progreso (es PvE o ya se unieron los 2), emitimos a toda la sala
        this.io.to(roomId).emit('battle_update', battleState);
      }
    } catch (error) {
      console.log('Error al unirse a la batalla: ', error.message);
      client.emit('battle_error', error.message);
    }
  }

  @SubscribeMessage('attack')
  async handleAttack(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { battleId: number }
  ) {
    try {
      const user = client.data.user;
      const roomId = `battle_${data.battleId}`;

      const newState = await this.battlesService.processTurn(+data.battleId, user.sub);
      // console.log("Proceso ataque: "+JSON.stringify(newState));
      this.io.to(roomId).emit('battle_update', newState);

    } catch (error) {
      console.log('Error al atacar: ', error.message);
      client.emit('battle_error', error.message);
    }
  }



  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

 

}
