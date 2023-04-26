import { getServeStaticConfig, jwtAccessOptions, jwtRefreshOptions, staticOptions } from '@fit-friends/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BACKEND_ENV_FILE_PATH } from './app.constants';
import { AuthModule } from './auth/auth.module';
import { validateEnvironments } from './env.validation';
import { ExercisesModule } from './exercises/exercises.module';
import { PrismaModule } from './prisma/prisma.module';
import { PurchasesModule } from './purchases/purchases.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { FriendsModule } from './friends/friends.module';
import { FilesModule } from './files/files.module';
import { FoodDiaryModule } from './user-personal-account/food-diary/food-diary.module';
import { ExerciseDiaryModule } from './user-personal-account/exercise-diary/exercise-diary.module';
import { FavoriteGymModule } from './user-personal-account/favorite-gym/favorite-gym.module';
import { BalanceModule } from './user-personal-account/balance/balance.module';
import { NotifyNewExercisesModule } from './user-personal-account/notify-new-exercises/notify-new-exercises.module';

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
    FriendsModule,
    FilesModule,
    FoodDiaryModule,
    ExerciseDiaryModule,
    FavoriteGymModule,
    BalanceModule,
    NotifyNewExercisesModule,
  ],
  providers: [UsersService],
  exports: [UsersModule]
})
export class AppModule {}
