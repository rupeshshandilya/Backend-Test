import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService extends PrismaClient to manage database connections.
 * Implements OnModuleInit to establish a connection when the module initializes.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * Called when the module initializes to ensure a database connection is established.
   */
  async onModuleInit() {
    await this.$connect();
  }
}
