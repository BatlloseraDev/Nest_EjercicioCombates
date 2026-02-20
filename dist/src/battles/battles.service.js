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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
const users_service_1 = require("../users/users.service");
const characters_service_1 = require("../characters/characters.service");
let BattlesService = class BattlesService {
    prisma;
    usersService;
    charactersService;
    activeBattles = new Map();
    constructor(prisma, usersService, charactersService) {
        this.prisma = prisma;
        this.usersService = usersService;
        this.charactersService = charactersService;
    }
    async create(userId, createBattleDto) {
        const { characterId, opponentId } = createBattleDto;
        const userCharacter = await this.prisma.userCharacter.findFirst({
            where: { id: characterId, userId: userId },
            include: { character: true }
        });
        if (!userCharacter) {
            throw new common_1.BadRequestException("El usuario no tiene a dicho personaje");
        }
        const isPvE = !opponentId;
        const battle = await this.prisma.battle.create({
            data: {
                status: isPvE ? client_1.BattleStatus.IN_PROGRESS : client_1.BattleStatus.PENDING,
                participants: {
                    create: [
                        {
                            userId: userId,
                            userCharacterId: characterId,
                        }
                    ]
                }
            },
            include: {
                participants: {
                    include: {
                        user: { select: { nickname: true } },
                        characterUsed: { include: { character: true } }
                    }
                }
            }
        });
        return battle;
    }
    async findAllBattles(userId) {
        return this.prisma.battle.findMany({
            where: {
                participants: {
                    some: {
                        userId: userId,
                    }
                }
            },
            include: { participants: true },
            orderBy: { createdAt: 'desc' }
        });
    }
    async findOne(id) {
        return this.prisma.battle.findUnique({
            where: { id },
            include: { participants: { include: { characterUsed: { include: { character: true } } } } }
        });
    }
    async update(id, updateBattleDto) {
        return `Actualiza una Batalla #${id}`;
    }
    async remove(id) {
        return `This action removes a #${id} battle`;
    }
    async joinBattle(battleId, userId, characterId) {
        const battle = await this.prisma.battle.findUnique({
            where: { id: battleId },
            include: { participants: true }
        });
        if (!battle || battle.status !== client_1.BattleStatus.PENDING) {
            throw new common_1.NotFoundException('Batalla no encontrada');
        }
        if (battle.participants.some(p => p.userId === userId)) {
            throw new common_1.BadRequestException('El usuario ya esta en la partida');
        }
        await this.prisma.battleParticipant.create({
            data: {
                battleId, userId, userCharacterId: characterId
            }
        });
        await this.prisma.battle.update({
            where: { id: battleId },
            data: { status: client_1.BattleStatus.IN_PROGRESS }
        });
        return { message: 'Te has unido a la batalla' };
    }
    async findPendingBattle() {
        return this.prisma.battle.findMany({
            where: { status: client_1.BattleStatus.PENDING },
            include: {
                participants: {
                    include: { user: { select: { nickname: true } } }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async initializeBattleState(battleId) {
        if (this.activeBattles.has(battleId)) {
            return this.activeBattles.get(battleId);
        }
        const battleDb = await this.prisma.battle.findUnique({
            where: { id: battleId },
            include: {
                participants: {
                    include: {
                        user: true,
                        characterUsed: {
                            include: {
                                character: true
                            }
                        }
                    }
                }
            }
        });
        if (!battleDb) {
            throw new common_1.NotFoundException('Batalla no encontrada');
        }
        const isPvE = battleDb.participants.length === 1;
        const players = battleDb.participants.map(p => ({
            userId: p.userId,
            nickname: p.user.nickname,
            characterName: p.characterUsed.character.name,
            maxHp: p.characterUsed.character.baseHp + (p.characterUsed.level * 10),
            currentHp: p.characterUsed.character.baseHp + (p.characterUsed.level * 10),
            attack: p.characterUsed.character.baseAttack + (p.characterUsed.level * 2 * p.characterUsed.character.special),
            avatar: p.characterUsed.character.imageUrl || '',
        }));
        if (isPvE) {
            players.push({
                userId: -1,
                nickname: 'CPU_skynet',
                characterName: 'CPU_Robot',
                maxHp: 100,
                currentHp: 100,
                attack: 15,
                avatar: '',
            });
        }
        const state = {
            battleId,
            isPvE,
            status: 'IN_PROGRESS',
            turnUserID: players[0].userId,
            players,
            logs: ['La batalla ha comenzado']
        };
        this.activeBattles.set(battleId, state);
        return state;
    }
    async processTurn(battleId, userId) {
        const state = this.activeBattles.get(battleId);
        if (!state || state.status == 'FINISHED') {
            throw new common_1.NotFoundException('Batalla no encontrada o finalizada');
        }
        if (state.turnUserID !== userId) {
            throw new common_1.BadRequestException('No es tu turno');
        }
        const attacker = state.players.find(player => player.userId === userId);
        const defender = state.players.find(player => player.userId !== userId);
        if (!attacker || !defender) {
            throw new Error('Jugadores no encontrados, fallo en el proceso de turno');
        }
        const damage = attacker.attack;
        console.log(`El daño procesado por ${attacker.nickname} es ${damage}`);
        defender.currentHp = Math.max(0, defender.currentHp - damage);
        state.logs.push(`${attacker.nickname} hizo ${damage} de daño a ${defender.nickname}`);
        if (defender.currentHp <= 0) {
            state.status = 'FINISHED';
            state.logs.push(`${defender.nickname} ha sido derrotado`);
            await this.finishBattle(battleId, attacker.userId, defender.userId);
            this.activeBattles.delete(battleId);
            return { ...state, winner: attacker.nickname };
        }
        state.turnUserID = defender.userId;
        if (state.isPvE && state.turnUserID === -1) {
            return this.processCpuTurn(battleId, state);
        }
        return state;
    }
    async processCpuTurn(battleId, state) {
        const cpu = state.players.find(p => p.userId === -1);
        const player = state.players.find(p => p.userId !== -1);
        if (!cpu || !player) {
            throw new Error('Error en el turno de la CPU, CPU o jugador no encontrados');
        }
        const damage = cpu.attack;
        player.currentHp = Math.max(0, player.currentHp - damage);
        state.logs.push(`CPU hizo ${damage} de daño a ${player.nickname}`);
        if (player.currentHp <= 0) {
            state.status = 'FINISHED';
            state.logs.push(`¡La CPU ha ganado!`);
            await this.finishBattle(battleId, null, player.userId);
            this.activeBattles.delete(battleId);
            return { ...state, winner: 'CPU' };
        }
        state.turnUserID = player.userId;
        return state;
    }
    async finishBattle(battleId, winnerId, loserId) {
        await this.prisma.battle.update({
            where: { id: battleId },
            data: {
                status: 'FINISHED',
                finishedAt: new Date(),
                winnerId: winnerId ? winnerId : undefined
            }
        });
        if (winnerId)
            await this.usersService.registerBattleWin(winnerId, 10);
        if (loserId && loserId !== -1)
            await this.usersService.registerBattleLoss(loserId);
        const participants = await this.prisma.battleParticipant.findMany({
            where: { battleId: battleId }
        });
        for (const participant of participants) {
            if (participant.userId === winnerId) {
                await this.charactersService.addExperienceToUserCharacter(participant.userCharacterId, 25);
            }
            else if (participant.userId === loserId) {
                await this.charactersService.addExperienceToUserCharacter(participant.userCharacterId, 10);
            }
        }
    }
};
exports.BattlesService = BattlesService;
exports.BattlesService = BattlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService,
        characters_service_1.CharactersService])
], BattlesService);
//# sourceMappingURL=battles.service.js.map