import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
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
        email: string;
        nickname: string;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
