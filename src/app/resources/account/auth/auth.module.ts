// ================================================================>> Core Library
import { Module }               from '@nestjs/common';

// ================================================================>> Custom Library
import { AuthController }       from './auth.controller';
import { AuthService }          from './auth.service';
import { IpAddressService }     from '../../../../app/CymCyber/ip-address.service';


@Module({
    controllers: [AuthController],
    providers: [AuthService, IpAddressService]
})
export class AuthModule {}
