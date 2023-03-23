import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtOption } from '../config/jwt.config';

@Injectable()
export class AccessTokenGuard extends AuthGuard(JwtOption.Access.Key) {}
