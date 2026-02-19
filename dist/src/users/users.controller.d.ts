import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<{
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
    assignCharacterToMe(req: any, characterId: string): Promise<{
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
    findMyCharacters(req: any): Promise<({
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
}
