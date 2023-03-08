import {
   Column,
   DataType,
   ForeignKey,
   Model,
   Table,
} from 'sequelize-typescript';
import { DBUser } from '../../user/models/user.model';
import { DBRole } from './role.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class DBUserRole extends Model<DBUserRole> {
   @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
   })
   override id!: number;

   @ForeignKey(() => DBRole)
   @Column({ type: DataType.INTEGER })
   roleId!: number;

   @ForeignKey(() => DBUser)
   @Column({ type: DataType.INTEGER })
   userId!: number;
}
