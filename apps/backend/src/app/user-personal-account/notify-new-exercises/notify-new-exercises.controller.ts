import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { CreateNotifyNewExerciseDto } from './dto/create-notify-new-exercise.dto';
import { UpdateNotifyNewExerciseDto } from './dto/update-notify-new-exercise.dto';

@Controller('notify-new-exercises')
export class NotifyNewExercisesController {
  constructor(
    private readonly notifyNewExercisesService: NotifyNewExercisesService
  ) {}

  @Post()
  create(@Body() createNotifyNewExerciseDto: CreateNotifyNewExerciseDto) {
    return this.notifyNewExercisesService.create(createNotifyNewExerciseDto);
  }

  @Get()
  findAll() {
    return this.notifyNewExercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notifyNewExercisesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotifyNewExerciseDto: UpdateNotifyNewExerciseDto
  ) {
    return this.notifyNewExercisesService.update(
      +id,
      updateNotifyNewExerciseDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notifyNewExercisesService.remove(+id);
  }
}
