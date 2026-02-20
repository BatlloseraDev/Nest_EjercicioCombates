import { BattlesService } from './battles.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
export declare class BattlesController {
    private readonly battlesService;
    constructor(battlesService: BattlesService);
    create(req: any, createBattleDto: CreateBattleDto): Promise<{
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
        status: import("../../generated/prisma/enums").BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    }>;
    join(req: any, id: string, body: {
        characterId: number;
    }): Promise<{
        message: string;
    }>;
    findAllPending(): Promise<({
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
        status: import("../../generated/prisma/enums").BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    })[]>;
    findAll(req: any): Promise<({
        participants: {
            id: number;
            userId: number;
            userCharacterId: number;
            battleId: number;
        }[];
    } & {
        id: number;
        status: import("../../generated/prisma/enums").BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    })[]>;
    findOne(id: string): Promise<({
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
        status: import("../../generated/prisma/enums").BattleStatus;
        winnerId: number | null;
        createdAt: Date;
        finishedAt: Date | null;
    }) | null>;
    update(id: string, updateBattleDto: UpdateBattleDto): Promise<string>;
    remove(id: string): Promise<string>;
}
