import { PersonalExerciseApiProperty } from "@fit-friends/shared-description-property";
import { PersonalExerciseValidation } from "@fit-friends/shared-validation";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsUUID } from "class-validator";

export class CreatePersonalExerciseDto {
  @ApiProperty(PersonalExerciseApiProperty.InitiatorId)
  @IsUUID()
  initiatorId!: string;

  @ApiProperty(PersonalExerciseApiProperty.UserId)
  @IsUUID()
  userId!: string;

  @ApiProperty(PersonalExerciseApiProperty.Status)
  @IsEnum(PersonalExerciseValidation.Status)
  status!: string;
}
