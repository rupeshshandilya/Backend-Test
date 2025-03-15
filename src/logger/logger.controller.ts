import { Body, Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { GetLogsDto } from './dto/logger.dto';

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
   * @param getLogsDto - DTO containing the algorithm name to filter logs.
   * @returns A list of logs that match the specified algorithm name.
   */
  @Get('by-name')
  async getLogs(@Body() getLogsDto: GetLogsDto) {
    return this.loggerService.getLogsByAlgorithmName(getLogsDto.algorithmName);
  }
}
