import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BattleStatus } from 'generated/prisma/client';

interface BattleState {
  battleId: number;
  turn: number;
  players: {
    userId: number;
    nickname: string;
    characterName: string;
    currentHp: number;
    maxHp: number;
    attack: number;
  }[];
}

@Injectable()
export class BattlesService {

  private activeBattles = new Map<number, BattleState>();

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
    //Si la partida es publica actualizar aqui el contricante cuando encuentee la partida.
  }

  async remove(id: number) {
    return `This action removes a #${id} battle`;
  }


  // async initializeBattle(battleId: number) {
  //   if (this.activeBattles.has(battleId)) {
  //     return this.activeBattles.get(battleId);
  //   }
  //   const battle = await this.prisma.battle.findUnique({
  //     where: { id: battleId },
  //     include: {
  //       participants: {
  //         include: {
  //           user: true,
  //           characterUsed: {
  //             include: {
  //               character: true
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  //   if (!battle) {
  //     throw new NotFoundException('Batalla no encontrada');
  //   }

  //   const state: BattleState = {
  //     battleId,
  //     turn: battle.participants[0].userId,
  //     players: battle.participants.map(participant => ({
  //       userId: participant.userId,
  //       nickname: participant.user.nickname,
  //       characterName: participant.characterUsed.character.name,

  //       maxHp: participant.characterUsed.character.baseHp +(participant.characterUsed.level *10),
  //       currentHp:participant.characterUsed.character.baseHp +(participant.characterUsed.level *10),
  //       attack: participant.characterUsed.character.baseAttack +(participant.characterUsed.level *2)
  //     }))
  //   };

  //   if (battle.status === 'PENDING'){
  //     await this.prisma.battle.update({
  //       where: { id: battleId },
  //       data: { status: 'IN_PROGRESS' }
  //     });
  //   }

  //   this.activeBattles.set(battleId, state);
  //   return state;
  // }

  async initializeBattle(battleId: number) {
    if(this.activeBattles.has(battleId)){
      return this.activeBattles.get(battleId);
    }

    
  }

  async processAttack(battleId: number, attackerId: number){
    const battle = this.activeBattles.get(battleId);
    if(!battle){
      throw new NotFoundException('Batalla no encontrada');
    }
    const attacker = battle.players.find(player => player.userId === attackerId);

    const defender = battle.players.find(player => player.userId !== attackerId);// el otro

    if(!attacker|| !defender){
      throw new Error('Jugadores no encontrados');
    }

    const damage = attacker.attack;
    defender.currentHp -= damage;

    let winner: any = null;
    if (defender.currentHp <= 0){
      defender.currentHp = 0;
      winner = attacker;

      await this.finishBattle(battleId, winner.userId);
      this.activeBattles.delete(battleId); 
    }

    return {
      attacker: attacker.nickname,
      target: defender.nickname,
      damage: damage,
      targetHp: defender.currentHp,
      winner: winner ? winner.nickname: null 
    }
  }


  async finishBattle(battleId: number, winnerId: number){
    await this.prisma.battle.update({
      where: {id: battleId},
      data: {
        status: 'FINISHED',
        finishedAt: new Date(),
        winnerId: winnerId
      }
    });

    await this.prisma.user.update({
      where: {id: winnerId},
      data:{
        experience: {
          increment: 10
        },
        wins:{
          increment: 1
        }
      }
    })
  }

  //metodo auxiliar
  private async getBattleFromDb(battleId: number){
    const battle = await this.prisma.battle.findUnique({
      where: {id: battleId},
      include:{
        participants:{
          include:{
            user: true,
            characterUsed:{
              include:{
                character: true
              }
            }
          }
        }
      }
    });
    if (!battle) throw new NotFoundException('Batalla no encontrada, hubo un problema');
    return battle;
  }
}
