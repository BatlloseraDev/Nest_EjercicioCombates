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
        password: string;
        nickname: string;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
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
            level: number;
            experience: number;
            id: number;
            userId: number;
            characterId: number;
            currentHp: number;
        })[];
        battlesWon: {
            createdAt: Date;
            id: number;
            status: import("../../generated/prisma/enums").BattleStatus;
            winnerId: number | null;
            finishedAt: Date | null;
        }[];
    } & {
        email: string;
        password: string;
        nickname: string;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }) | null>;
    assignCharacter(userId: number, characterId: number): Promise<{
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
        level: number;
        experience: number;
        id: number;
        userId: number;
        characterId: number;
        currentHp: number;
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
        level: number;
        experience: number;
        id: number;
        userId: number;
        characterId: number;
        currentHp: number;
    })[]>;
    registerBattleWin(userId: number, xpGained: number): Promise<{
        email: string;
        password: string;
        nickname: string;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    registerBattleLoss(userId: number): Promise<{
        email: string;
        password: string;
        nickname: string;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    private excludePassword;
}
