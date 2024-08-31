import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /** @EnableCORS using NestJS built-in method */
  app.enableCors();

  /** @UseGlobalValidationPipe */
  app.useGlobalPipes(new ValidationPipe({
    /** @note Throw fields that we don't need */
    whitelist: true,
    /** @note Allow transformation of fields or conversion of data for requests and responses */
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  /** Set the limit for request bodies to 50MB using body-parser middleware */
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  /** Start the application and listen on port 3000 */
  await app.listen(3000);
}

bootstrap();
