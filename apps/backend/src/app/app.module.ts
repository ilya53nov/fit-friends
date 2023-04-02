import { getServeStaticConfig, jwtAccessOptions, jwtRefreshOptions, staticOptions } from '@fit-friends/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BACKEND_ENV_FILE_PATH } from './app.constants';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { validateEnvironments } from './env.validation';
import { ExercisesModule } from './exercises/exercises.module';
import { PrismaModule } from './prisma/prisma.module';
import { PurchasesModule } from './purchases/purchases.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: BACKEND_ENV_FILE_PATH,
      load: [jwtAccessOptions, jwtRefreshOptions, staticOptions],
      validate: validateEnvironments,
    }),
    ServeStaticModule.forRootAsync({
      useFactory: getServeStaticConfig,
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    PrismaModule,
    ExercisesModule,
    PurchasesModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
  exports: [UsersModule]
})
export class AppModule {}
