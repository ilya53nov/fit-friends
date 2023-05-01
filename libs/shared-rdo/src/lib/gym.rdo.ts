import { GymApiProperty } from '@fit-friends/shared-description-property';
import { GymTypeEnum, LocationEnum } from '@fit-friends/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GymRdo {
  @ApiProperty(GymApiProperty.Id)
  @Expose()
  id!: number;

  @ApiProperty(GymApiProperty.Title)
  @Expose()
  title!: string;

  @ApiProperty(GymApiProperty.Location)
  @Expose()
  location!: LocationEnum;

  @ApiProperty(GymApiProperty.IsVerified)
  @Expose()
  isVerified!: boolean;

  @ApiProperty(GymApiProperty.Types)
  @Expose()
  types!: GymTypeEnum[];

  @ApiProperty(GymApiProperty.Images)
  @Expose()
  images!: string[];

  @ApiProperty(GymApiProperty.Description)
  @Expose()
  description!: string;

  @ApiProperty(GymApiProperty.Price)
  @Expose()
  price!: number;

  @ApiProperty(GymApiProperty.CreatedAt)
  @Expose()
  createdAt!: Date;
}
