import { User } from '../../user/models/user.model';
import {
   BelongsToMany,
   Column,
   DataType,
   Model,
   Table,
} from 'sequelize-typescript';
import { UserRole } from './user-role.model';

interface RoleCreationAttrs {
   value: string;
   description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
   @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
   })
   override id!: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value!: string;

   @Column({ type: DataType.STRING, allowNull: false })
   description!: string;

   @BelongsToMany(() => User, () => UserRole)
   users!: User[];
}
