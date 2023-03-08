import { IsEmail, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export namespace AccountRegister {
   export class Request {
      @IsEmail()
      email!: string;
      @IsString()
      password!: string;
      @Optional()
      @IsString()
      displayName?: string;
   }

   export class Response {
      email!: string;
   }
}
