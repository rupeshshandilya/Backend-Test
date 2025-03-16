import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

/**
 * Bootstrap function to initialize the NestJS application.
 * It creates the application instance and starts the server.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  const logger = new Logger('Main');

  await app.listen(PORT);

  logger.log(`Listening on ${await app.getUrl()}`);
}
bootstrap();
