import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    //como tengo que controlar la contraseña aqui tengo que meter codigo pero me encantaria hacer return
    //del create directamente
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    //TODO cuando tenga el Rol echo integrarlo aqui

    try{
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
          //TODO integrar aqui el rol por defecto
        },
      });
      return user;
    }catch(error){
      if(error.code === 'P2002'){
        throw new BadRequestException("El email o nickname ya existe");
      }
      throw error;
    }

  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      include:{
        roles: {include: {role:true}},
        characters: {include: {character:true}},
      }
    });

    return users.map(user => this.excludePassword(user));
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {id},
      include:{
        roles:{include: {role:true}},
        characters:{include: {character:true}},
        battlesWon: true
      }
    });

    if(!user){
      throw new NotFoundException("El usuario no existe");
    }
    return this.excludePassword(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
     if(updateUserDto.password) updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);

     const user = await this.prisma.user.update({
      where: {id},
      data: updateUserDto,
     });

     return this.excludePassword(user);
  }

  async remove(id: number) {
    return this.prisma.user.delete({where: {id}});
  }

  async assignCharacter(userId: number, characterId: number){
    //TODO metodo para asignar characteres al usuario a la tabla pivote...
  }

  private excludePassword(user){
    const {password, ...result} = user;
    return result;
  }
}
