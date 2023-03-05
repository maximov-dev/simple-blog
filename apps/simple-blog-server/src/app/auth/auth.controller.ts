import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AccountLogin, AccountRegister} from "@simple-blog/contracts";

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('login')
   login(@Body() { email, password }: AccountLogin.Request) {
      return this.authService.validateUser(email, password);
   }

   @Post('register')
   register(@Body() request: AccountRegister.Request) {
      return this.authService.register(request);
   }
}
