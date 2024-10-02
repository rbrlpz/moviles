import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const { username, password } = body;
    return this.loginService.validateUser(username, password);
  }
}
