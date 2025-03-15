import { Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { LoggerModule } from './logger/logger.module';

/**
 * AppModule serves as the root module of the application.
 * It imports AlgorithmModule and LoggerModule to manage algorithm execution and logging.
 */
@Module({
  imports: [AlgorithmModule, LoggerModule],
  providers: [],
})
export class AppModule {}
