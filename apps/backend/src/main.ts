/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { AppOptions } from './constants';
import { ApiRouteEnum } from '@fit-friends/shared-types';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const path = join(__dirname, ApiRouteEnum.Assets);

  app.useStaticAssets(path);

  const config = new DocumentBuilder()
  .setTitle(AppOptions.Title)
  .setDescription(AppOptions.Description)
  .setVersion(AppOptions.Version)
  .build();
  
  const globalPrefix = AppOptions.GlobalPrefix;
  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(AppOptions.Specification, app, document);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  
  const port = process.env.PORT || AppOptions.Port;
  const host = process.env.HOST || AppOptions.Host;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
}

bootstrap();
