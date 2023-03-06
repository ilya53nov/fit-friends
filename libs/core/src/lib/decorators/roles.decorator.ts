import { SetMetadata } from '@nestjs/common';
import { ParametrKey } from '@fit-friends/shared-types';

export const Roles = (...roles: string[]) => SetMetadata(ParametrKey.Roles, roles);
