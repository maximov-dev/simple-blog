import {
   BelongsToMany,
   Column,
   DataType,
   HasMany,
   Model,
   Table,
} from 'sequelize-typescript';
import { IPost, IUser, UserRole } from '@simple-blog/interfaces';
import { DBRole } from '../../role/models/role.model';
import { DBPost } from '../../post/models/post.model';
import { DBUserRole } from '../../role/models/user-role.model';

@Table({ tableName: 'users' })
export class DBUser extends Model<DBUser, IUser> {
   @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
   })
   override id!: string;
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   email!: string;
   @Column({ type: DataType.STRING, allowNull: false })
   password!: string;

   @BelongsToMany(() => DBRole, () => DBUserRole)
   roles!: UserRole[];

   @HasMany(() => DBPost)
   posts!: IPost[];
   @Column({ type: DataType.STRING, allowNull: false })
   passwordHash!: string;
   @Column({ type: DataType.STRING, allowNull: true })
   displayName?: string;
}
