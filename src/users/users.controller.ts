import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import {Request} from '@nestjs/common'



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Roles('ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @UseGuards(JwtGuard)
  @Post('me/characters/:characterId')
  async assignCharacterToMe(@Request() req, @Param('characterId') characterId: string){
    const userId = req.user.id;//cojo el id del usuario del token
    return this.usersService.assignCharacter(userId, +characterId);
  }

  @UseGuards(JwtGuard)
  @Get('me/characters')
  async findMyCharacters(@Request() req){
    const userId = req.user.id;
    return this.usersService.findMyCharacters(userId);
  }

  @UseGuards(JwtGuard)
  @Get('me/profile')
  async findMe(@Request() req){
    const userId = req.user.id;
    return this.usersService.findOne(userId);
  }
}
