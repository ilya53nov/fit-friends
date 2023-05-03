import { FavoriteGymApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FavoriteGymRdo {
  @ApiProperty(FavoriteGymApiProperty.GymId)
  @Expose()
  gymId!: number;
}
