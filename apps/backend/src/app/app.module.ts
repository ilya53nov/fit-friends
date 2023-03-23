import { jwtAccessOptions, jwtRefreshOptions } from '@fit-friends/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BACKEND_ENV_FILE_PATH } from './app.constants';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { validateEnvironments } from './env.validation';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: BACKEND_ENV_FILE_PATH,
      load: [jwtAccessOptions, jwtRefreshOptions],
      validate: validateEnvironments,
    }),
    UsersModule,
    AuthModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
  exports: [UsersModule]
})
export class AppModule {}
