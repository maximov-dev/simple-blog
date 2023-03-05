import {
   BelongsToMany,
   Column,
   DataType,
   HasMany,
   Model,
   Table,
} from 'sequelize-typescript';
import { UserRole } from '@simple-blog/interfaces';
import { Role } from '../../role/models/role.model';
import { Post } from '../../post/models/post.model';

interface UserCreationAttrs {
   email: string;
   password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
   @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
   })
   override id!: number;
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   email!: string;
   @Column({ type: DataType.STRING, allowNull: false })
   password!: string;

   @BelongsToMany(() => Role, () => UserRole)
   roles!: Role[];

   @HasMany(() => Post)
   posts!: Post[];
}
