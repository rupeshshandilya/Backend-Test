import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * LoggerModule is responsible for handling logging functionality.
 * It provides a service for logging algorithm executions and retrieving logs.
 * This module integrates with PrismaService for database operations.
 */
@Module({
  providers: [LoggerService, PrismaService],
  exports: [LoggerService],
  controllers: [LoggerController],
})
export class LoggerModule {}
