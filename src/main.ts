import {  NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as cors from 'cors';
import * as bodyParser from 'body-parser';


import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /** @EnableCORS */
  app.use(cors());

  /** @useGlobalValidationPipe */
  app.useGlobalPipes(new ValidationPipe({
      /** @noted throw filds that we don't need */
      whitelist: true,
      /** @noted allowed transform fields or conversion vulue of data for request and response*/
      transform: true,
      transformOptions: {
          enableImplicitConversion: true
      }
  }));
    /** Set the limit for request bodies to 50MB*/
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3000);
}
bootstrap();
