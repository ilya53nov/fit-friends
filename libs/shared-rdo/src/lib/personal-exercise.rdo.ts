import { PersonalExerciseApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PersonalExerciseRdo {
  @ApiProperty(PersonalExerciseApiProperty.Id)
  @Expose()
  public id!: string;

  @ApiProperty(PersonalExerciseApiProperty.InitiatorId)
  @Expose()
  initiatorId!: string;

  @ApiProperty(PersonalExerciseApiProperty.UserId)
  @Expose()
  userId!: string;

  @ApiProperty(PersonalExerciseApiProperty.CreatedAt)
  @Expose()
  createdAt!: Date;

  @ApiProperty(PersonalExerciseApiProperty.UpdatedAt)
  @Expose()
  updatedAt!: Date;

  @ApiProperty(PersonalExerciseApiProperty.Status)
  @Expose()
  status!: string;
}
