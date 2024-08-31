// src/app/resources/account/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import UsersJob from 'src/models/User/Job.model';
import Department from 'src/models/User/Department.model';
import Position from 'src/models/User/Position.model';
import UsersTitle from 'src/models/User/Title.model';
import { jwtConstants } from '../../../../app/shared/constants.twt';
import { IpAddressService } from '../../../../app/CymCyber/ip-address.service';

@Module({
  imports: [
    SequelizeModule.forFeature([UsersJob, Department, Position, UsersTitle]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, IpAddressService],
})
export class AuthModule {}
