import { NestFactory } from '@nestjs/core';
import { moviesModule } from './movies.module';

async function bootstrap() {
  const app = await NestFactory.create(moviesModule);
  await app.listen(3000); // Puerto del API Gateway
}
bootstrap();


