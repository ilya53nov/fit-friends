import { UpdateCoachUserDto } from './update-coach-user.dto';
import { UpdateSportsmanUserDto } from './update-sportsman-user.dto';

export type UpdateUserDto = UpdateCoachUserDto | UpdateSportsmanUserDto;
