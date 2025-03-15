import { ConsoleLogger, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Logger service for handling algorithm execution logs.
 * Extends NestJS ConsoleLogger for enhanced logging capabilities.
 */
@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  /**
   * Logs the execution details of an algorithm, storing it in the database.
   *
   * @param algorithmName - The name of the algorithm executed.
   * @param input - The input parameters used for execution.
   * @param output - The resulting output of the algorithm.
   */
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

  /**
   * Retrieves all stored algorithm logs, ordered by creation date.
   *
   * @returns A list of all algorithm execution logs.
   */
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

  /**
   * Retrieves logs filtered by a specific algorithm name.
   *
   * @param algorithmName - The name of the algorithm to filter logs.
   * @returns A list of logs corresponding to the given algorithm name.
   */
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
