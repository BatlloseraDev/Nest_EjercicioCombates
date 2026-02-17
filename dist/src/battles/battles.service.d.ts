import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
export declare class BattlesService {
    create(createBattleDto: CreateBattleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBattleDto: UpdateBattleDto): string;
    remove(id: number): string;
}
