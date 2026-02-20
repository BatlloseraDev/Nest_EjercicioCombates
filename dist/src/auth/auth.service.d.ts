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
        email: string;
        nickname: string;
        id: number;
        level: number;
        experience: number;
        wins: number;
        losses: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
