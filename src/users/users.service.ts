import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);//si hago el hash en front aqui no tendria que hacerlo
    //TODO cuando tenga el Rol echo integrarlo aqui
    const userRole = await this.prisma.role.findUnique({
      where: { name: 'USER' }
    })

    if (!userRole) {
      throw new NotFoundException("El rol 'USER' no existe, Ejecuta los seeds ");
    }

    try {
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
          roles: {
            create: {
              roleId: userRole.id
            }
          }
        },
        include: {
          roles: {
            include: { role: true }
          }
        }
      });
      return this.excludePassword(user);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException("El email o nickname ya existe");
      }
      throw error;
    }

  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        roles: { include: { role: true } },
        characters: { include: { character: true } },
      }
    });

    return users.map(user => this.excludePassword(user));
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        roles: { include: { role: true } },
        characters: { include: { character: true } },
        battlesWon: true
      }
    });

    if (!user) {
      throw new NotFoundException("El usuario no existe");
    }
    return this.excludePassword(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);

    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return this.excludePassword(user);
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        roles: { include: { role: true } },
        characters: { include: { character: true } },
        battlesWon: true
      }
    });
    return user;
  }


  async assignCharacter(userId: number, characterId: number) {

    try {
      const characterTemplate = await this.prisma.character.findUnique({ where: { id: characterId } });
      if (!characterTemplate) {
        throw new NotFoundException("El personaje no existe");
      }

      const user = await this.findOne(userId);
      if (user.level < characterTemplate.minLevel) {
        throw new Error("El nivel del usuario es menor al nivel del personaje")
      }
      const userCharacter = await this.prisma.userCharacter.findFirst({
        where: { userId, characterId }
      });
      if (userCharacter) {
        throw new BadRequestException("El usuario ya tiene a dicho personaje");
      }


      return this.prisma.userCharacter.create({
        data: {
          userId: userId,
          characterId: characterId,
          currentHp: characterTemplate.baseHp,
        },
        include: {
          character: true
        }
      });
    }catch(error){
      console.log(error);
      //devolver error
      throw error;
    }
   
  }

  async findMyCharacters(userId: number) {
    return this.prisma.userCharacter.findMany({
      where: { userId },
      include: { character: true }
    });
  }

  async registerBattleWin(userId: number, xpGained: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        experience: true,
        level: true
      }
    });


    if (!user) throw new NotFoundException("Error al subir de experiencia: El usuario no existe");

    const totalXp = user.experience + xpGained;
    const levelToGain = Math.floor(totalXp / 100);
    const remainingXp = totalXp % 100;


    const infoUpdated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        experience: remainingXp,
        level: {
          increment: levelToGain
        },
        wins: {
          increment: 1
        }
      }
    });


    return infoUpdated;
  }


  async registerBattleLoss(userId: number) {
    const infoUpdated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        losses: {
          increment: 1
        }
      }
    });

    return infoUpdated;
  }


  private excludePassword(user) {
    const { password, ...result } = user;
    return result;
  }
}
