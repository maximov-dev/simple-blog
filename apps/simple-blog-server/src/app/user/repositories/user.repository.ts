import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { IUser } from '@simple-blog/interfaces';

@Injectable()
export class UserRepository {
   constructor(@InjectModel(User) private userRepository: typeof User) {}

   async createUser(userToCreate: IUser) {
      const user = await this.userRepository.create(userToCreate);
      //await user.$set('roles', [role.id])

      return user;
   }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
    return user;
  }
}
