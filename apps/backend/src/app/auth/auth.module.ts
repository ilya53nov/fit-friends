import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { getJwtOptions, JwtAccessStrategy, JwtConfig, JwtRefreshStrategy } from '@fit-friends/core';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtAccessStrategy, JwtRefreshStrategy, JwtConfig],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: getJwtOptions,
    }),

  ]
})
export class AuthModule {}
