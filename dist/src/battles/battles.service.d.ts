import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BattleStatus } from 'generated/prisma/client';
export declare class BattlesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
}
