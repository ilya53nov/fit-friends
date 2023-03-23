import { RoleEnum } from './role.enum';

export type JwtPayloadType = {
  sub: string,
  email: string,
  role: RoleEnum,
  name: string,
}
