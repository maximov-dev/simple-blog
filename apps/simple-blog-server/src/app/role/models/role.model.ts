import { DBUser } from '../../user/models/user.model';
import {
   BelongsToMany,
   Column,
   DataType,
   Model,
   Table,
} from 'sequelize-typescript';
import { DBUserRole } from './user-role.model';
import {IUser} from "@simple-blog/interfaces";

interface RoleCreationAttrs {
   value: string;
   description: string;
}

@Table({ tableName: 'roles' })
export class DBRole extends Model<DBRole, RoleCreationAttrs> {
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

   @BelongsToMany(() => DBUser, () => DBUserRole)
   users!: IUser[];
}
