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
let BattlesService = class BattlesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createBattleDto) {
        const { characterId, opponentId } = createBattleDto;
        const userCharacter = await this.prisma.userCharacter.findFirst({
            where: { id: characterId, userId: userId },
        });
        if (!userCharacter) {
            throw new common_1.BadRequestException("El usuario no tiene a dicho personaje");
        }
        const battle = await this.prisma.battle.create({
            data: {
                status: client_1.BattleStatus.PENDING,
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
        if (opponentId) {
        }
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
};
exports.BattlesService = BattlesService;
exports.BattlesService = BattlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BattlesService);
//# sourceMappingURL=battles.service.js.map