import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BattlesService } from './battles.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';

@Controller('battles')
@UseGuards(JwtGuard)
export class BattlesController {
  constructor(private readonly battlesService: BattlesService) { }

  @Post()
  create(@Request() req, @Body() createBattleDto: CreateBattleDto) {

    return this.battlesService.create(req.user.id, createBattleDto);
  }

  @Post(':id/join')
  join(@Request() req, @Param('id') id: string, @Body() body: { characterId: number }) {
    return this.battlesService.joinBattle(+id, req.user.id, body.characterId);
  }

  // Listar salas disponibles
  @Get('pending')
  findAllPending() {
    return this.battlesService.findPendingBattle();
  }


  @Get()
  findAll(@Request() req) {
    return this.battlesService.findAllBattles(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.battlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBattleDto: UpdateBattleDto) {
    return this.battlesService.update(+id, updateBattleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.battlesService.remove(+id);
  }
}
