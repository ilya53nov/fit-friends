import { PartialType } from '@nestjs/swagger';
import { CreateFavoriteGymDto } from './create-favorite-gym.dto';

export class UpdateFavoriteGymDto extends PartialType(CreateFavoriteGymDto) {}
