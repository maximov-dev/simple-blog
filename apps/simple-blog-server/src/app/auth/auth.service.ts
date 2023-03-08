import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import { AccountRegister } from '@simple-blog/contracts';
import { UserRole } from '@simple-blog/interfaces';
import { nanoid } from 'nanoid';
import { UserRepository } from '../user/repositories/user.repository';

@Injectable()
export class AuthService {
   constructor(
      private readonly userRepository: UserRepository,
      private readonly jwtService: JwtService
   ) {}
   async register({ email, password, displayName }: AccountRegister.Request) {
      const oldUser = await this.userRepository.getUserByEmail(email);

      if (oldUser) {
         throw new Error('User exists in system');
      }

      const roles: UserRole[] = [UserRole.Reader];
      const newEntity = new UserEntity({
         id: nanoid(),
         displayName,
         email,
         roles,
          posts: [],
         passwordHash: '',
      });
      const newEntityWithPassword = await newEntity.setPassword(password);
      const newUser = await this.userRepository.createUser(
         newEntityWithPassword
      );

      return { email: newUser.email };
   }

   async validateUser(email: string, password: string) {
      const user = await this.userRepository.getUserByEmail(email);

      if (!user) {
         throw new Error('Wrong login or password');
      }

      const userEntity = new UserEntity(user);

      const isCorrectPassword = await userEntity.validatePassword(password);

      if (!isCorrectPassword) {
         throw new Error('Wrong login or password');
      }

      return { id: user.id };
   }

   async login(id: string) {
      return {
         access_token: await this.jwtService.signAsync({ id }),
      };
   }
}
