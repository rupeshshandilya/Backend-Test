import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrap function to initialize the NestJS application.
 * It creates the application instance and starts the server.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;

  await app.listen(PORT);

  console.log(`🚀 Server is running on http://localhost:${PORT}`);
}
bootstrap();
