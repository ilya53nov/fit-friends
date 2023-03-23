import { Injectable } from '@nestjs/common';
import {ConfigService, registerAs} from '@nestjs/config';
import {JwtModuleOptions, JwtSignOptions} from '@nestjs/jwt';

export const JwtOption = {
  Access: {
    Key: 'jwt-access',
    Secret: {
      Key: 'jwt-access.secret',
      EnvKey: 'JWT_ACCESS_SECRET',
    },
    LifeTime: {
      Key: 'jwt-access.lifeTime',
      EnvKey: 'JWT_ACCESS_LIFE_TIME',      
    },
  },
  Refresh: {
    Key: 'jwt-refresh',
    Secret: {
      Key: 'jwt-refresh.secret',
      EnvKey: 'JWT_REFRESH_SECRET',
    },
    LifeTime: {
      Key: 'jwt-refresh.lifeTime',
      EnvKey: 'JWT_REFRESH_LIFE_TIME',      
    },
  },
}

const ENCRYPTION_ALGORITHM = 'HS256';

export const jwtAccessOptions = registerAs(JwtOption.Access.Key, () => ({
  secret: process.env[JwtOption.Access.Secret.EnvKey],
  lifeTime: process.env[JwtOption.Access.LifeTime.EnvKey],
}));

export const jwtRefreshOptions = registerAs(JwtOption.Refresh.Key, () => ({
  secret: process.env[JwtOption.Refresh.Secret.EnvKey],
  lifeTime: process.env[JwtOption.Refresh.LifeTime.EnvKey],
}));

@Injectable()
export class JwtConfig {
  constructor(
    private readonly configService: ConfigService
  ) {}

  public async getJwtAccessConfig(): Promise<JwtSignOptions> {
    return {
      secret: this.configService.get<string>(JwtOption.Access.Secret.Key),
      expiresIn: this.configService.get<string>(JwtOption.Access.LifeTime.Key),
    }
  }

  public async getJwtRefreshConfig(): Promise<JwtSignOptions> {
    return {
      secret: this.configService.get<string>(JwtOption.Refresh.Secret.Key),
      expiresIn: this.configService.get<string>(JwtOption.Refresh.LifeTime.Key),
    }
  }
}

export async function getJwtOptions(): Promise<JwtModuleOptions> {
  return {
    signOptions: { algorithm: ENCRYPTION_ALGORITHM}
  }
}
