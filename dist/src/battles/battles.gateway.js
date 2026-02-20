"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlesGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt_1 = require("@nestjs/jwt");
const battles_service_1 = require("./battles.service");
const config_1 = require("@nestjs/config");
const config = new config_1.ConfigService();
let BattlesGateway = class BattlesGateway {
    jwtService;
    battlesService;
    io;
    constructor(jwtService, battlesService) {
        this.jwtService = jwtService;
        this.battlesService = battlesService;
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth?.token || client.handshake.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new Error('Token no encontrado');
            }
            const payload = this.jwtService.verify(token, {
                secret: config.get('JWT_SECRET')
            });
            client.data.user = payload;
            console.log(`🔵Cliente conectado: ${payload.email} (${client.id})`);
        }
        catch (error) {
            console.log(`🔴La conexion ha sido rechadaza: `, error.message);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        console.log(`🔴Cliente desconectado: ${client.data.user.email} (${client.id})`);
    }
    async handleJoinBattle(client, data) {
        try {
            const user = client.data.user;
            const roomId = `battle_${data.battleId}`;
            await client.join(roomId);
            const battleState = await this.battlesService.initializeBattleState(+data.battleId);
            if (!battleState) {
                throw new Error('Batalla no encontrada');
            }
            if (battleState.isPvE) {
                this.io.to(roomId).emit('battle_update', battleState);
            }
            else {
                const sockets = await this.io.in(roomId).fetchSockets();
                if (sockets.length == 2) {
                    this.io.to(roomId).emit('battle_update', battleState);
                }
                else {
                    client.emit('battle_wait', { message: 'Esperando a que entre un oponente' });
                }
            }
        }
        catch (error) {
            console.log('Error al unirse a la batalla: ', error.message);
            client.emit('battle_error', error.message);
        }
    }
    async handleAttack(client, data) {
        try {
            const user = client.data.user;
            const roomId = `battle_${data.battleId}`;
            const newState = await this.battlesService.processTurn(+data.battleId, user.sub);
            this.io.to(roomId).emit('battle_update', newState);
        }
        catch (error) {
            console.log('Error al atacar: ', error.message);
            client.emit('battle_error', error.message);
        }
    }
    handleMessage(client, payload) {
        return 'Hello world!';
    }
};
exports.BattlesGateway = BattlesGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], BattlesGateway.prototype, "io", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join_battle'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], BattlesGateway.prototype, "handleJoinBattle", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('attack'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], BattlesGateway.prototype, "handleAttack", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], BattlesGateway.prototype, "handleMessage", null);
exports.BattlesGateway = BattlesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    __metadata("design:paramtypes", [jwt_1.JwtService, battles_service_1.BattlesService])
], BattlesGateway);
//# sourceMappingURL=battles.gateway.js.map