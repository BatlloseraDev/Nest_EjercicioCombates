import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
export declare class CharactersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCharacterDto: CreateCharacterDto): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    addExperienceToUserCharacter(userCharacterId: number, xpGained: number): Promise<{
        id: number;
        level: number;
        experience: number;
        userId: number;
        characterId: number;
    }>;
}
