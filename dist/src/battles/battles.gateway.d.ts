import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { BattlesService } from './battles.service';
export declare class BattlesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private jwtService;
    private battlesService;
    io: Server;
    constructor(jwtService: JwtService, battlesService: BattlesService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: any): void;
    handleJoinBattle(client: Socket, data: {
        battleId: number;
    }): Promise<void>;
    handleAttack(client: Socket, data: {
        battleId: number;
    }): Promise<void>;
    handleMessage(client: any, payload: any): string;
}
