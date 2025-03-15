import { Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [AlgorithmModule, LoggerModule],
  providers: [],
})
export class AppModule {}
