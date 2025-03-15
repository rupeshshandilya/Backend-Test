import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LoggerService, PrismaService],
  exports: [LoggerService],
  controllers: [LoggerController],
})
export class LoggerModule {}
