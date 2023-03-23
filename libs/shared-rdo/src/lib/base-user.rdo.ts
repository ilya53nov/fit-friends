import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserApiProperty } from '@fit-friends/shared-description-property';

export class BaseUserRdo {
  @ApiProperty(UserApiProperty.Id)
  @Expose()
  id!: string;

  @ApiProperty(UserApiProperty.Name)
  @Expose()
  name!: string;

  @ApiProperty(UserApiProperty.Email)
  @Expose()
  email!: string;

  @ApiProperty(UserApiProperty.Avatar)
  @Expose()
  avatar!: string;

  @ApiProperty(UserApiProperty.Gender)
  @Expose()
  gender!: string;

  @ApiProperty(UserApiProperty.DateBirth)
  @Expose()
  dateBirth?: Date;

  @ApiProperty(UserApiProperty.Role)
  @Expose()
  role!: string;

  @ApiProperty(UserApiProperty.LocationDefault)
  @Expose()
  locationDefault!: string;

  @ApiProperty(UserApiProperty.CreatedAt)  
  @Expose()
  createdAt?: Date;

  @ApiProperty(UserApiProperty.ExerciseLevel)
  @Expose()
  exerciseLevel!: string;

  @ApiProperty(UserApiProperty.ExerciseTypes)
  @Expose()
  exerciseTypes!: string[]; 
}
