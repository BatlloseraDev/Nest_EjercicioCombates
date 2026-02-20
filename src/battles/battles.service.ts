import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BattleStatus } from 'generated/prisma/client';
import { UsersService } from 'src/users/users.service';
import { CharactersService } from 'src/characters/characters.service';

interface BattleState {
  battleId: number;
  isPvE: boolean;
  status: 'IN_PROGRESS' | 'FINISHED';
  turnUserID: number;
  players: {
    userId: number;
    nickname: string;
    characterName: string;
    currentHp: number;
    maxHp: number;
    attack: number;
    avatar: string;
  }[];
  logs: string[];
}

@Injectable()
export class BattlesService {

  private activeBattles = new Map<number, BattleState>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly charactersService: CharactersService
  ) { }

  async create(userId: number, createBattleDto: CreateBattleDto) {
    const { characterId, opponentId } = createBattleDto;

    const userCharacter = await this.prisma.userCharacter.findFirst({
      where: { id: characterId, userId: userId },
      include: { character: true }
    });

    if (!userCharacter) {
      throw new BadRequestException("El usuario no tiene a dicho personaje");
    }

    const isPvE = !opponentId;
    const battle = await this.prisma.battle.create({
      data: {
        status: isPvE ? BattleStatus.IN_PROGRESS : BattleStatus.PENDING,
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
    //honestamente para esto he tenido que usar IA me estaba liando mucho 
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
  }//para encontrar todas mis batallas (historico)

  async findOne(id: number) {
    return this.prisma.battle.findUnique({
      where: { id },
      include: { participants: { include: { characterUsed: { include: { character: true } } } } }
    });
  }

  async update(id: number, updateBattleDto: UpdateBattleDto) {
    return `Actualiza una Batalla #${id}`

  }

  async remove(id: number) {
    return `This action removes a #${id} battle`;
  }

  async joinBattle(battleId: number, userId: number, characterId: number) {
    const battle = await this.prisma.battle.findUnique({
      where: { id: battleId },
      include: { participants: true }
    });

    if (!battle || battle.status !== BattleStatus.PENDING) {
      throw new NotFoundException('Batalla no encontrada');
    }

    if (battle.participants.some(p => p.userId === userId)) {
      throw new BadRequestException('El usuario ya esta en la partida');
    }//con esto evito que el usuario se pueda enfrentar asi mismo... 

    await this.prisma.battleParticipant.create({
      data: {
        battleId, userId, userCharacterId: characterId
      }
    });

    await this.prisma.battle.update({
      where: { id: battleId },
      data: { status: BattleStatus.IN_PROGRESS }
    });

    return { message: 'Te has unido a la batalla' };
  }

  async findPendingBattle() {
    return this.prisma.battle.findMany({
      where: { status: BattleStatus.PENDING },
      include: {
        participants: {
          include: { user: { select: { nickname: true } } }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  async initializeBattleState(battleId: number) {
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
      throw new NotFoundException('Batalla no encontrada');
    }

    const isPvE = battleDb.participants.length === 1;

    const players = battleDb.participants.map(p => ({
      userId: p.userId,
      nickname: p.user.nickname,
      characterName: p.characterUsed.character.name,
      // Calculo simple de stats puede que le meta factores adicionales si me sobra tiempo
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
    }// de momento lo hago generico
    const state: BattleState = {
      battleId,
      isPvE,
      status: 'IN_PROGRESS',
      turnUserID: players[0].userId,//luego cambiarlo a random
      players,
      logs: ['La batalla ha comenzado']
    };
    

    this.activeBattles.set(battleId, state);

    return state;
  }

  async processTurn(battleId: number, userId: number) {
    const state = this.activeBattles.get(battleId);
    if (!state || state.status == 'FINISHED') {
      throw new NotFoundException('Batalla no encontrada o finalizada');
    }
    if (state.turnUserID !== userId) {
      throw new BadRequestException('No es tu turno');
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
      return { ...state, winner: attacker.nickname }
    }

    state.turnUserID = defender.userId;

    if (state.isPvE && state.turnUserID === -1) {
      //si veo que me sobra tiempo le aplico un delay a bocaperro
      return this.processCpuTurn(battleId, state);
    }

    return state
  }
  async processCpuTurn(battleId: number, state: BattleState) {
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
        await this.finishBattle(battleId, null, player.userId); // Null porque ganó la CPU
        this.activeBattles.delete(battleId);
        return { ...state, winner: 'CPU' };
    }

    state.turnUserID = player.userId;// devuelve el turno al jugador
    return state;
  }


  async finishBattle(battleId: number, winnerId: number | null, loserId: number | null) {
    await this.prisma.battle.update({
      where: { id: battleId },
      data: {
        status: 'FINISHED',
        finishedAt: new Date(),
        winnerId: winnerId ? winnerId : undefined // haciendo referencia a la cpu
      }
    });

    //Esto tengo que cambiarlo 
    if (winnerId) await this.usersService.registerBattleWin(winnerId, 10);
    if (loserId && loserId !== -1) await this.usersService.registerBattleLoss(loserId);

    const participants = await this.prisma.battleParticipant.findMany({
      where: {battleId: battleId}
    });

    for( const participant of participants){
      if(participant.userId === winnerId){
        await this.charactersService.addExperienceToUserCharacter(participant.userCharacterId, 25);
      }
      else if(participant.userId === loserId){
        await this.charactersService.addExperienceToUserCharacter(participant.userCharacterId, 10);
      }
    }
  }


}
