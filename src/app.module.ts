import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  controllers: [
      AppController
  ],
  imports: [
      // Apply global config module for use every where we need
      ConfigModule,
      // Load modules of POS resources
  ],
})
export class AppModule {}
