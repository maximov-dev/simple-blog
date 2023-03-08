import { IsEmail, IsString } from 'class-validator';

export namespace AccountLogin {

  export class Request {
    @IsEmail()
    email!: string;
    @IsString()
    password!: string;
  }

  export class Response {
    access_token!: string;
  }
}
