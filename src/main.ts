import * as config from 'config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('boostrap');

  const port = serverConfig.port;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
