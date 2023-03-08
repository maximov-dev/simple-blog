import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AccountLogin, AccountRegister} from "@simple-blog/contracts";

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('login')
   async login(@Body() { email, password }: AccountLogin.Request) {
     const { id } = await this.authService.validateUser(email, password);

      return this.authService.login(id);
   }

   @Post('register')
   async register(@Body() request: AccountRegister.Request) {
      return this.authService.register(request);
   }
}
