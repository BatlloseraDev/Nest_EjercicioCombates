import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<{
        email: string;
        nickname: string;
        password: string;
        id: number;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<({
        roles: ({
            role: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            roleId: number;
            userId: number;
        })[];
        characters: ({
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
            level: number;
            experience: number;
            userId: number;
            characterId: number;
        })[];
        battlesWon: {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums").BattleStatus;
            winnerId: number | null;
            finishedAt: Date | null;
        }[];
    } & {
        email: string;
        nickname: string;
        password: string;
        id: number;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    assignCharacter(userId: number, characterId: number): Promise<{
        id: number;
        level: number;
        experience: number;
        userId: number;
        characterId: number;
    }>;
    findMyCharacters(userId: number): Promise<({
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
        level: number;
        experience: number;
        userId: number;
        characterId: number;
    })[]>;
    registerBattleWin(userId: number, xpGained: number): Promise<{
        email: string;
        nickname: string;
        password: string;
        id: number;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    registerBattleLoss(userId: number): Promise<{
        email: string;
        nickname: string;
        password: string;
        id: number;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private excludePassword;
}
