import { Controller, Get, Param } from '@nestjs/common';
import { LoggerService } from './logger.service';

/**
 * Controller for handling log-related requests.
 */
@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  /**
   * Retrieves all logs from the database.
   *
   * @returns A list of all logged algorithm executions.
   */
  @Get()
  async getAllLogs() {
    return await this.loggerService.getAllLogs();
  }

  /**
   * Retrieves logs filtered by algorithm name.
   *
   * @param algorithmName - The name of the algorithm extracted from the URL parameter.
   * @returns A list of logs matching the specified algorithm name.
   */
  @Get(':algorithmName')
  async getLogs(@Param('algorithmName') algorithmName: string) {
    return this.loggerService.getLogsByAlgorithmName(algorithmName);
  }
}
