import { Module } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { AlgorithmController } from './algorithm.controller';
import { LoggerModule } from 'src/logger/logger.module';

/**
 * AlgorithmModule is responsible for handling algorithm-related operations.
 * It provides services for executing various algorithms and logs their execution.
 * This module imports LoggerModule to enable logging functionality.
 */
@Module({
  imports: [LoggerModule],
  controllers: [AlgorithmController],
  providers: [AlgorithmService],
})
export class AlgorithmModule {}
