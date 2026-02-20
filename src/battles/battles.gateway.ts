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
    @MessageBody() data: { battleId: number}
  ) {
    try {
      const user = client.data.user;
      const roomId = `battle_${data.battleId}`;
      await client.join(roomId);
  
      
      const battleState = await this.battlesService.initializeBattleState(+data.battleId);

      if(!battleState){
        throw new Error('Batalla no encontrada');
      }

      if(battleState.isPvE){
        this.io.to(roomId).emit('battle_update', battleState);
      }
      else{
        const sockets = await this.io.in(roomId).fetchSockets();
        
        if(sockets.length == 2){
          this.io.to(roomId).emit('battle_update', battleState);
        }else{
          client.emit('battle_wait', {message: 'Esperando a que entre un oponente'})
        }
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

    }catch(error){
      console.log('Error al atacar: ',error.message);
      client.emit('battle_error', error.message);
    }
  }


  // //para la cpu
  // @SubscribeMessage('join_battle_cpu')
  // async handleJoinBattleCpu(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() battleId: number,
  // ) {
  //   try {
  //     const roomId = `battle_${battleId}`;
  //     client.join(roomId);

  //     const battlesService = await this.battlesService.initializeBattle(+battleId);

  //     this.io.to(roomId).emit('battle_start', battlesService);
  //     this.io.to(roomId).emit('battle_log', 'Pelea contra la cpu iniciada');

  //     return { event: 'joined_cpu', message: `Luchando contra la máquina en sala ${roomId}` };
  //   }catch(error){
  //     console.log('Error al unirse a la batalla: ',error.message);
  //     client.emit('battle_error', error.message);
  //   }
 
  // }

  // //para vs usuario
  // @SubscribeMessage('join_battle_user')
  // async handleJoinBattlePvp(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() battleId: number
  // ) {
  //   try{
  //     const roomId = `battle_${battleId}`;
  //     client.join(roomId);

  //     const socketsInRoom = await this.io.in(roomId).fetchSockets();
  //     const connectedCount = socketsInRoom.length;

  //     this.io.to(roomId).emit('battle_log', `El jugador ${client.data.user.nickname} ha entrado a la arena.`);

  //     if(connectedCount ==2){
  //       const battleState = await this.battlesService.initializeBattle(+battleId);
  //       this.io.to(roomId).emit('battle_start', battleState);
  //     } else{
  //       client.emit('battle_wait', {message: 'Esperando a que entre un oponente'});
  //     }
  //     return {event: 'joined_pvp', message: `Te has unido a la batalla: ${battleId}`}
  //   }catch(error){
  //     console.log('Error al unirse a la batalla: ',error.message);
  //     client.emit('battle_error', error.message);
  //   }
  // }

  // @SubscribeMessage('join_battle')
  // async handleJoinBattle(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() battleId: number,
  // ){
  //   try{
  //     const battle = await this.battlesService.findOne(+battleId);
  //     if(!battle){
  //       throw new Error('Batalla no encontrada');
  //     }
  //     console.log("los datos del usuario son: ",client.data.user);

  //     const roomId = `battle_${battleId}`;
  //     client.join(roomId);

  //     const battleState = await this.battlesService.initializeBattle(+battleId);

  //     this.io.to(roomId).emit('battle_log', battleState);

  //     return{ event: 'joined', message: `Te has unido a la batalla: ${battleId}`};
  //   }catch(error){
  //     console.log('Error al unirse a la batalla: ',error.message);
  //     client.emit('battle_error', error.message);
  //   }
  // }

  // @SubscribeMessage('start_battle')
  // async handleStartBattle(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
  //   // Continuar mañana
  // }


  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  // @SubscribeMessage('attack')
  // async handleAttack(
  //   @ConnectedSocket() client: Socket,
  //   @MessageBody() battleId: number
  // ) {
  //   try {
  //     const userId = client.data.user.sub;
  //     const roomId = `battle_${battleId}`;
  //     const result = await this.battlesService.processAttack(battleId, userId);

  //     this.io.to(roomId).emit('battle_update', {
  //       message: `${result.attacker} hizo ${result.damage} de daño a ${result.target}`,
  //       damage: result.damage,
  //       targetHp: result.targetHp,
  //       attacker: result.attacker
  //     });

  //     if (result.winner) {
  //       this.io.to(roomId).emit('game_over', {
  //         winner: result.winner,
  //         message: `${result.winner} ha ganado la partida`
  //       })
  //     }
  //   } catch (error) {
  //     console.log('Error al atacar: ', error.message);
  //     client.emit('battle_error', error.message);
  //   }
  // }

}
