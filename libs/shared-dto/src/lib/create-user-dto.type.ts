import { CreateCoachUserDto } from './create-coach-user.dto';
import { CreateSportsmanUserDto } from './create-sportsman-user.dto';

export type CreateUserDto = CreateCoachUserDto | CreateSportsmanUserDto;
