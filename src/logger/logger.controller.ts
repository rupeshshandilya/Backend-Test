import { Body, Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { GetLogsDto } from './dto/logger.dto';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get()
  async getAllLogs() {
    return await this.loggerService.getAllLogs();
  }

  @Get('by-name')
  async getLogs(@Body() getLogsDto: GetLogsDto) {
    return this.loggerService.getLogsByAlgorithmName(getLogsDto.algorithmName);
  }
}
