import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CharactersModule } from './characters/characters.module';
import { BattlesModule } from './battles/battles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    UsersModule,
    RolesModule,
    CharactersModule,
    BattlesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
// 24:43