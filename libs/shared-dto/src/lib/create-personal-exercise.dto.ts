import { PersonalExerciseApiProperty } from "@fit-friends/shared-description-property";
import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreatePersonalExerciseDto {
  @ApiProperty(PersonalExerciseApiProperty.UserId)
  @IsUUID()
  userId!: string;
}
