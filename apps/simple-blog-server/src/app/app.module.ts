import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DBUser } from './user/models/user.model';
import { DBRole } from './role/models/role.model';
import { DBUserRole } from './role/models/user-role.model';
import { DBPost } from './post/models/post.model';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: `.${process.env.NODE_ENV}.env`,
      }),
      SequelizeModule.forRoot({
         dialect: 'postgres',
         host: process.env.POSTGRES_HOST,
         port: Number(process.env.POSTGRESS_PORT),
         username: process.env.POSTGRES_USER,
         password: process.env.POSTGRESS_PASSWORD,
         database: process.env.POSTGRES_DB,
         models: [DBUser, DBRole, DBUserRole, DBPost],
         autoLoadModels: true,
      }),
      AuthModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
