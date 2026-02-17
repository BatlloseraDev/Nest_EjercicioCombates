import { Module } from '@nestjs/common';
import { BattlesService } from './battles.service';
import { BattlesController } from './battles.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BattlesController],
  providers: [BattlesService],
  imports:[
    JwtModule, PrismaModule
  ],
  exports: [BattlesService]
})
export class BattlesModule {}
