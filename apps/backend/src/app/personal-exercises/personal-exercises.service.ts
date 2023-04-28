import { CreatePersonalExerciseDto, UpdatePersonalExerciseDto } from '@fit-friends/shared-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonalExercisesService {
  create(createPersonalExerciseDto: CreatePersonalExerciseDto) {
    return 'This action adds a new personalExercise';
  }

  findAll() {
    return `This action returns all personalExercises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalExercise`;
  }

  update(id: number, updatePersonalExerciseDto: UpdatePersonalExerciseDto) {
    return `This action updates a #${id} personalExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalExercise`;
  }
}
