import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DBUser } from '../models/user.model';
import { IUser } from '@simple-blog/interfaces';

@Injectable()
export class UserRepository {
   constructor(@InjectModel(DBUser) private userRepository: typeof DBUser) {}

   async createUser(userToCreate: IUser) {
      const user = await this.userRepository.create(userToCreate);
      //await user.$set('roles', [role.id])

      return user;
   }

   async getUserByEmail(email: string) {
      const user = await this.userRepository.findOne({
         where: { email },
         include: { all: true },
      });
      return user;
   }
}
