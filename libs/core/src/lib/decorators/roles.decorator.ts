import { SetMetadata } from '@nestjs/common';
import { ParameterKey } from '@fit-friends/shared-types';

export const Roles = (...roles: string[]) => SetMetadata(ParameterKey.Roles, roles);
