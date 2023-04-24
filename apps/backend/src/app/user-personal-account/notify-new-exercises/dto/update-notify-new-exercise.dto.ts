import { PartialType } from '@nestjs/swagger';
import { CreateNotifyNewExerciseDto } from './create-notify-new-exercise.dto';

export class UpdateNotifyNewExerciseDto extends PartialType(
  CreateNotifyNewExerciseDto
) {}
