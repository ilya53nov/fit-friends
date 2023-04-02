import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsEnum, IsOptional, Length } from 'class-validator';

export class UpdateBaseUserDto {
  @ApiProperty(UserApiProperty.Name)
  @IsOptional()
  @Length(
    UserValidation.Name.Length.min,
    UserValidation.Name.Length.max,
    {message: UserValidation.Name.Length.message}
  )
  name!: string;

  @ApiProperty(UserApiProperty.Avatar)
  @IsOptional()
  avatar!: string;

  @ApiProperty(UserApiProperty.Gender)
  @IsOptional()
  @IsEnum(UserValidation.Gender)
  gender!: string;

  @ApiProperty(UserApiProperty.DateBirth)
  @IsOptional()
  dateBirth?: Date;

  @ApiProperty(UserApiProperty.LocationDefault)
  @IsOptional()
  @IsEnum(UserValidation.Location)
  locationDefault!: string;

  @ApiProperty(UserApiProperty.ExerciseLevel)
  @IsOptional()
  @IsEnum(UserValidation.ExerciseLevel)
  exerciseLevel!: string;

  @ApiProperty(UserApiProperty.ExerciseTypes)
  @IsOptional()
  @IsEnum(UserValidation.ExerciseType.items, {each: true})
  @ArrayMaxSize(UserValidation.ExerciseType.maxCount)
  exerciseTypes!: string[];
}
