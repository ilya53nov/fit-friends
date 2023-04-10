import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { CreateExerciseDiaryDto } from './dto/create-exercise-diary.dto';
import { UpdateExerciseDiaryDto } from './dto/update-exercise-diary.dto';

@Controller('exercise-diary')
export class ExerciseDiaryController {
  constructor(private readonly exerciseDiaryService: ExerciseDiaryService) {}

  @Post()
  create(@Body() createExerciseDiaryDto: CreateExerciseDiaryDto) {
    return this.exerciseDiaryService.create(createExerciseDiaryDto);
  }

  @Get()
  findAll() {
    return this.exerciseDiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseDiaryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDiaryDto: UpdateExerciseDiaryDto
  ) {
    return this.exerciseDiaryService.update(+id, updateExerciseDiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseDiaryService.remove(+id);
  }
}
