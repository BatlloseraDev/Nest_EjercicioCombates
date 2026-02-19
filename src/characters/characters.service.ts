import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {

  constructor(private readonly prisma: PrismaService) { }


  async create(createCharacterDto: CreateCharacterDto) {
    try{
      const newCharacter = await this.prisma.character.create({
        data:{
          name: createCharacterDto.name,
          baseHp: createCharacterDto.baseHp,
          baseAttack: createCharacterDto.baseAttack,
          special: createCharacterDto.special,
          minLevel: createCharacterDto.minLevel,
          imageUrl: createCharacterDto.imageUrl
        }
      })
      return newCharacter;
    }catch(error){
      if(error.code === 'P2002'){
        throw new ConflictException('Ya existe un personaje con ese nombre');
      }
      throw new InternalServerErrorException('Error al crear el personaje: '+error.message);
    }
  }

  async findAll() {
    return await this.prisma.character.findMany({
      orderBy: { minLevel: 'asc' }
    });
  }

  async findOne(id: number) {
    const character = await this.prisma.character.findUnique({
      where: { id }
    });
    if (!character) {
      throw new NotFoundException('Personaje no encontrado');
    }
    return character;
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    await this.findOne(id);
    try{
      return await this.prisma.character.update({
        where: { id },
        data: updateCharacterDto
      });
    }catch(error){
      if(error.code === 'P2002'){
        throw new ConflictException('Ya existe un personaje con ese nombre');
      }
      throw new InternalServerErrorException('Error al actualizar el personaje: '+error.message);
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.character.delete({
      where: { id }
    });
  }

  async addExperienceToUserCharacter(userCharacterId: number, xpGained: number){
    const userCharacter = await this.prisma.userCharacter.findUnique({
      where: { id: userCharacterId },
      select: {experience: true, level: true}
    });

    if(!userCharacter) throw new NotFoundException('Error al añadir experiencia al personaje del usuario: Personaje no encontrado');
    
    const totalXp = userCharacter.experience + xpGained;
    const levelsToGain = Math.floor(totalXp / 100);
    const remainingXp = totalXp % 100;

    const updatedUserCharacter = await this.prisma.userCharacter.update({
      where: { id: userCharacterId },
      data: {
        experience: remainingXp,
        level: {
          increment: levelsToGain
        }
      }
    });

    return updatedUserCharacter
  }

}
