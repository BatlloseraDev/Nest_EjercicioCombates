import { Module } from '@nestjs/common';
import { BattlesService } from './battles.service';
import { BattlesController } from './battles.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BattlesGateway } from './battles.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { CharactersModule } from 'src/characters/characters.module';


@Module({
  controllers: [BattlesController],
  providers: [BattlesService, BattlesGateway, ConfigService ],
  imports:[
    JwtModule, PrismaModule, AuthModule, UsersModule, CharactersModule
  ],
  exports: [BattlesService]
})
export class BattlesModule {}
