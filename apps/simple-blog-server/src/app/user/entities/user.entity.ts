import { compare, genSalt, hash } from 'bcrypt';
import { IPost, IUser, UserRole } from '@simple-blog/interfaces';

export class UserEntity implements IUser {
   displayName?: string;
   email: string;
   id: string;
   passwordHash: string;
   roles: UserRole[];
   posts: IPost[];

   constructor(user: IUser) {
      this.id = user.id;
      this.displayName = user.displayName;
      this.passwordHash = user.passwordHash;
      this.email = user.email;
      this.roles = user.roles ?? [];
      this.posts = user.posts ?? [];
   }

   async setPassword(password: string) {
      const salt = await genSalt(10);
      this.passwordHash = await hash(password, salt);
      return this;
   }

   validatePassword(password: string) {
      return compare(password, this.passwordHash);
   }

   updateProfile(displayName: string) {
      this.displayName = displayName;
      return this;
   }
}
