import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalExercisesService } from './personal-exercises.service';
import { CreatePersonalExerciseDto, UpdatePersonalExerciseDto } from '@fit-friends/shared-dto';

@Controller('personal-exercises')
export class PersonalExercisesController {
  constructor(
    private readonly personalExercisesService: PersonalExercisesService
  ) {}

  @Post()
  create(@Body() createPersonalExerciseDto: CreatePersonalExerciseDto) {
    return this.personalExercisesService.create(createPersonalExerciseDto);
  }

  @Get()
  findAll() {
    return this.personalExercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalExercisesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalExerciseDto: UpdatePersonalExerciseDto
  ) {
    return this.personalExercisesService.update(+id, updatePersonalExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalExercisesService.remove(+id);
  }
}
