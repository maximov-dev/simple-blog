import { IPost } from './post.interface';

export enum UserRole {
   Admin = 'Admin',
   Reader = 'Reader',
}

export interface IUser {
   id: string;
   displayName?: string;
   email: string;
   passwordHash: string;
   roles: UserRole;
   posts: IPost[];
}
