import { PersonalExerciseApiProperty } from "@fit-friends/shared-description-property";
import { PersonalExerciseValidation } from "@fit-friends/shared-validation";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";

export class UpdatePersonalExerciseDto {
  @ApiProperty(PersonalExerciseApiProperty.Status)
  @IsEnum(PersonalExerciseValidation.Status)
  status!: string;
}
