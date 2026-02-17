import { BattlesService } from './battles.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
export declare class BattlesController {
    private readonly battlesService;
    constructor(battlesService: BattlesService);
    create(createBattleDto: CreateBattleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBattleDto: UpdateBattleDto): string;
    remove(id: string): string;
}
