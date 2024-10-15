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

  @Post('recover')
  async recover(@Body() body: { username: string }) {
    const { username} = body;
    return this.loginService.recoverUser(username);
  }

  @Post('register')
  async regoster(@Body() body: { username: string, password: string }) {
    const { username, password} = body;
    return this.loginService.registerUser(username, password);
  }
}
