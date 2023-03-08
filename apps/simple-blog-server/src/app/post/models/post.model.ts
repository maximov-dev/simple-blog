import {
   BelongsTo,
   Column,
   DataType,
   ForeignKey,
   Model,
   Table,
} from 'sequelize-typescript';
import { DBUser } from '../../user/models/user.model';
import { IPost } from '@simple-blog/interfaces';

@Table({ tableName: 'posts' })
export class DBPost extends Model<DBPost, IPost> {
   @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
   })
   override id!: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   title!: string;

   @Column({ type: DataType.STRING, allowNull: false })
   content!: string;

   @Column({ type: DataType.STRING })
   image!: string;

   @ForeignKey(() => DBUser)
   @Column({ type: DataType.INTEGER })
   userId!: number;

   @BelongsTo(() => DBUser)
   author!: DBUser;
}
