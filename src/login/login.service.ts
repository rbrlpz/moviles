import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LoginService {
  private readonly jsonServerUrl = 'http://localhost:3001/users';

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const response = await axios.get(this.jsonServerUrl);
      const users = response.data;

      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        return {
          code: "OK",
          message: "Acceso correcto",
          data: {
            id: user.id,
            username: user.username
          }
        };
      } else {
        return {
          code: "ERROR",
          message: "Usuario o password no validos",
          data: {}
        };
      }
    } catch (error) {
      throw new HttpException('Error connecting to the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
