import { Body, Controller, HttpStatus, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async sinIn(@Body() signInDto: { email: string; password: string }) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }
}
