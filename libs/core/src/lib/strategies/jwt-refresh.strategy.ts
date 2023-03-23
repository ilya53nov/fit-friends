import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { JwtOption } from '../config/jwt.config';
import { BaseUserInterface } from '@fit-friends/shared-types';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, JwtOption.Refresh.Key) {
  constructor(
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(JwtOption.Refresh.Secret.EnvKey),
    });
  }

  async validate({sub, email, role }: Pick<BaseUserInterface, 'email' | 'role'> & { sub: string}) {
    return { id: sub, email, role };
  }
}
