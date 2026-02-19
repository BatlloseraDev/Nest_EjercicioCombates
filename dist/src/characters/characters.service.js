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
exports.CharactersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CharactersService = class CharactersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCharacterDto) {
        try {
            const newCharacter = await this.prisma.character.create({
                data: {
                    name: createCharacterDto.name,
                    baseHp: createCharacterDto.baseHp,
                    baseAttack: createCharacterDto.baseAttack,
                    special: createCharacterDto.special,
                    minLevel: createCharacterDto.minLevel,
                    imageUrl: createCharacterDto.imageUrl
                }
            });
            return newCharacter;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un personaje con ese nombre');
            }
            throw new common_1.InternalServerErrorException('Error al crear el personaje: ' + error.message);
        }
    }
    async findAll() {
        return await this.prisma.character.findMany({
            orderBy: { minLevel: 'asc' }
        });
    }
    async findOne(id) {
        const character = await this.prisma.character.findUnique({
            where: { id }
        });
        if (!character) {
            throw new common_1.NotFoundException('Personaje no encontrado');
        }
        return character;
    }
    async update(id, updateCharacterDto) {
        await this.findOne(id);
        try {
            return await this.prisma.character.update({
                where: { id },
                data: updateCharacterDto
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un personaje con ese nombre');
            }
            throw new common_1.InternalServerErrorException('Error al actualizar el personaje: ' + error.message);
        }
    }
    async remove(id) {
        await this.findOne(id);
        return await this.prisma.character.delete({
            where: { id }
        });
    }
    async addExperienceToUserCharacter(userCharacterId, xpGained) {
        const userCharacter = await this.prisma.userCharacter.findUnique({
            where: { id: userCharacterId },
            select: { experience: true, level: true }
        });
        if (!userCharacter)
            throw new common_1.NotFoundException('Error al añadir experiencia al personaje del usuario: Personaje no encontrado');
        const totalXp = userCharacter.experience + xpGained;
        const levelsToGain = Math.floor(totalXp / 100);
        const remainingXp = totalXp % 100;
        const updatedUserCharacter = await this.prisma.userCharacter.update({
            where: { id: userCharacterId },
            data: {
                experience: remainingXp,
                level: {
                    increment: levelsToGain
                }
            }
        });
        return updatedUserCharacter;
    }
};
exports.CharactersService = CharactersService;
exports.CharactersService = CharactersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CharactersService);
//# sourceMappingURL=characters.service.js.map