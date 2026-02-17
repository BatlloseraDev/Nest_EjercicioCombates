import {IsInt, IsOptional} from 'class-validator';


export class CreateBattleDto {
    @IsInt()
    characterId: number;

    @IsInt()
    @IsOptional()//con esto manejo si es vs IA o vs Player
    opponentId?: number;
}
