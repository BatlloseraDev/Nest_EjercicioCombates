import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BattleStatus } from 'generated/prisma/client';
import { UsersService } from 'src/users/users.service';
import { CharactersService } from 'src/characters/characters.service';
interface BattleState {
    battleId: number;
    isPvE: boolean;
    status: 'PENDING' | 'IN_PROGRESS' | 'FINISHED';
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
export declare class BattlesService {
    private readonly prisma;
    private readonly usersService;
    private readonly charactersService;
    private activeBattles;
    constructor(prisma: PrismaService, usersService: UsersService, charactersService: CharactersService);
    create(userId: number, createBattleDto: CreateBattleDto): Promise<{
        participants: ({
            user: {
                nickname: string;
            };
            characterUsed: {
                character: {
                    id: number;
                    name: string;
                    baseHp: number;
                    baseAttack: number;
                    minLevel: number;
                    special: number;
                    imageUrl: string | null;
                };
            } & {
                id: number;
                userId: number;
                characterId: number;
                level: number;
                experience: number;
                currentHp: number;
            };
        } & {
            id: number;
            userId: number;
            userCharacterId: number;
            battleId: number;
        })[];
    } & {
        id: number;
        status: BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    }>;
    findAllBattles(userId: number): Promise<({
        participants: {
            id: number;
            userId: number;
            userCharacterId: number;
            battleId: number;
        }[];
    } & {
        id: number;
        status: BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    })[]>;
    findOne(id: number): Promise<({
        participants: ({
            characterUsed: {
                character: {
                    id: number;
                    name: string;
                    baseHp: number;
                    baseAttack: number;
                    minLevel: number;
                    special: number;
                    imageUrl: string | null;
                };
            } & {
                id: number;
                userId: number;
                characterId: number;
                level: number;
                experience: number;
                currentHp: number;
            };
        } & {
            id: number;
            userId: number;
            userCharacterId: number;
            battleId: number;
        })[];
    } & {
        id: number;
        status: BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    }) | null>;
    update(id: number, updateBattleDto: UpdateBattleDto): Promise<string>;
    remove(id: number): Promise<string>;
    joinBattle(battleId: number, userId: number, characterId: number): Promise<{
        message: string;
    }>;
    findPendingBattle(): Promise<({
        participants: ({
            user: {
                nickname: string;
            };
        } & {
            id: number;
            userId: number;
            userCharacterId: number;
            battleId: number;
        })[];
    } & {
        id: number;
        status: BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    })[]>;
    initializeBattleState(battleId: number): Promise<BattleState | undefined>;
    processTurn(battleId: number, userId: number): Promise<BattleState | {
        winner: string;
        battleId: number;
        isPvE: boolean;
        status: "PENDING" | "IN_PROGRESS" | "FINISHED";
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
    }>;
    processCpuTurn(battleId: number, state: BattleState): Promise<BattleState | {
        winner: string;
        battleId: number;
        isPvE: boolean;
        status: "PENDING" | "IN_PROGRESS" | "FINISHED";
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
    }>;
    finishBattle(battleId: number, winnerId: number | null, loserId: number | null): Promise<void>;
}
export {};
