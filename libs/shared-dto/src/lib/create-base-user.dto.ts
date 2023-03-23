import { UserApiProperty } from '@fit-friends/shared-description-property';
import { RoleEnum } from '@fit-friends/shared-types';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, Contains, IsEnum, IsString, Length } from 'class-validator';

export class CreateBaseUserDto {
  @ApiProperty(UserApiProperty.Name)
  @IsString()
  @Length(
    UserValidation.Name.Length.min,
    UserValidation.Name.Length.max,
    {message: UserValidation.Name.Length.message}
  )
  name!: string;

  @ApiProperty(UserApiProperty.Email)
  @IsString()
  email!: string;

  @ApiProperty(UserApiProperty.Avatar)
  avatar!: string;

  @ApiProperty(UserApiProperty.Password)
  @IsString()
  @Length(
    UserValidation.PasswordLength.min,
    UserValidation.PasswordLength.max,
    {message: UserValidation.PasswordLength.message}
  )
  password!: string;

  @ApiProperty(UserApiProperty.Gender)
  @IsEnum(UserValidation.Gender)
  gender!: string;

  @ApiProperty(UserApiProperty.DateBirth)
  dateBirth?: Date;

  @ApiProperty(UserApiProperty.Role)
  @Contains(RoleEnum.Coach)
  role!: string;

  @ApiProperty(UserApiProperty.LocationDefault)
  @IsEnum(UserValidation.Location)
  locationDefault!: string;

  @ApiProperty(UserApiProperty.ExerciseLevel)
  @IsEnum(UserValidation.ExerciseLevel)
  exerciseLevel!: string;

  @ApiProperty(UserApiProperty.ExerciseTypes)
  @IsEnum(UserValidation.ExerciseType.items, {each: true})
  @ArrayMaxSize(UserValidation.ExerciseType.maxCount)
  exerciseTypes!: string[];
}
