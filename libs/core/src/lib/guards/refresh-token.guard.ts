import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtOption } from '../config/jwt.config';

@Injectable()
export class RefreshTokenGuard extends AuthGuard(JwtOption.Refresh.Key) {}
