import { PartialType } from '@nestjs/swagger';
import { CreateExerciseDiaryDto } from './create-exercise-diary.dto';

export class UpdateExerciseDiaryDto extends PartialType(
  CreateExerciseDiaryDto
) {}
