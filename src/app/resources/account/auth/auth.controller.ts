// ================================================================>> Core Library
import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseInterceptors } from '@nestjs/common';
import { Request } from 'express'; // Import Request from express

// ================================================================>> Custom Library
import { LoginRequestDto, UserDto } from './auth.dto';
import { AuthService }              from './auth.service';
import { FileInterceptor }          from '@nestjs/platform-express';

@Controller('') // Specify a path for the controller
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor(''))
    async login(@Body() data: LoginRequestDto, @Req() req: Request): Promise<{ access_token: string, expires_in: string, user: UserDto }> {
        return await this.authService.login(data, req);
    }
}
