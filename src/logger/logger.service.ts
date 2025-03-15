import { ConsoleLogger, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async logAlgorithmExecution(algorithmName: string, input: any, output: any) {
    try {
      await this.prisma.algorithmLog.create({
        data: {
          algorithmName,
          input,
          output,
        },
      });

      this.log(
        `Algorithm: ${algorithmName} | Input: ${JSON.stringify(input)} | Output: ${JSON.stringify(output)}`,
      );
    } catch (error) {
      this.error(`Failed to log algorithm execution: ${error.message}`);
    }
  }

  async getAllLogs() {
    try {
      const logs = await this.prisma.algorithmLog.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      return logs;
    } catch (error) {
      throw new Error(`Failed to retrieve logs: ${error.message}`);
    }
  }

  async getLogsByAlgorithmName(algorithmName: string) {
    try {
      return await this.prisma.algorithmLog.findMany({
        where: { algorithmName },
      });
    } catch (error) {
      throw new Error(`Failed to fetch logs: ${error.message}`);
    }
  }
}
