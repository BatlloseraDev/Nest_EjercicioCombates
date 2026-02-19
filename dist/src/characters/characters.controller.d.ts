import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
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
    findOne(id: string): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    update(id: string, updateCharacterDto: UpdateCharacterDto): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        baseHp: number;
        baseAttack: number;
        minLevel: number;
        special: number;
        imageUrl: string | null;
    }>;
}
