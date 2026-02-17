import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BattleStatus } from 'generated/prisma/client';

@Injectable()
export class BattlesService {

  constructor(private readonly prisma: PrismaService) { }

  async create(userId: number, createBattleDto: CreateBattleDto) {
    const { characterId, opponentId } = createBattleDto;

    const userCharacter = await this.prisma.userCharacter.findFirst({
      where: { id: characterId, userId: userId },
    });

    if (!userCharacter) {
      throw new BadRequestException("El usuario no tiene a dicho personaje");
    }

    const battle = await this.prisma.battle.create({
      data: {
        status: BattleStatus.PENDING,
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
    })
    //honestamente para esto he tenido que usar IA me estaba liando mucho con los include
    if (opponentId) {
      //aqui debería de validar que el rival tiene un personaje seleccionado
      //o pedir el character del rival... lo dejo para el victor del futuro
    }

    return battle;
  }

  async findAllBattles(userId: number) {
    return this.prisma.battle.findMany({
      where: {
        participants: {
          some: {
            userId: userId,
          }
        }
      },
      include: { participants: true },
      orderBy: { createdAt: 'desc' }//asi se me ordenan automaticamente.
    })
  }

  async findOne(id: number) {
    return this.prisma.battle.findUnique({
      where: { id },
      include: { participants: { include: { characterUsed: { include: { character: true } } } } }
    });
  }

  async update(id: number, updateBattleDto: UpdateBattleDto) {
    return `Actualiza una Batalla #${id}` 
    // Nota para victor del futuro: aqui puedes mirar de implementar el tema de los websockets
  }

  async remove(id: number) {
    return `This action removes a #${id} battle`;
  }
}
