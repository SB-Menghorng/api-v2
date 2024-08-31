import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController }                                         from './app.controller';
import { ConfigModule }                                          from './config/config.module';
import { AuthModule }                                            from './app/resources/account/auth/auth.module';
import { RouterModule }                                          from '@nestjs/core';
import { appRouts }                                              from './app.routing';
import { JwtMiddleware }                                         from './app/middlewares/jwt.middleware';
import { AdminModule }                                           from './app/resources/cp/admin/admin.module';


@Module({
  controllers: [
      AppController,
  ],
  imports: [
      // Apply global config module for use every where we need
      ConfigModule,
      // Load modules of TDMS resources
      AuthModule,
      AdminModule,
      RouterModule.register(appRouts)

  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(JwtMiddleware)
      .exclude(
        {
          path: '', method: RequestMethod.GET
        },
        {
          path: 'api/auth/login', method: RequestMethod.POST
        }
      )            
      .forRoutes({ path: '*', method: RequestMethod.ALL });

  }
}
