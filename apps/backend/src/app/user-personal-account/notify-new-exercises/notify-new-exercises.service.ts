import { Injectable } from '@nestjs/common';
import { CreateNotifyNewExerciseDto } from './dto/create-notify-new-exercise.dto';
import { UpdateNotifyNewExerciseDto } from './dto/update-notify-new-exercise.dto';

@Injectable()
export class NotifyNewExercisesService {
  create(createNotifyNewExerciseDto: CreateNotifyNewExerciseDto) {
    return 'This action adds a new notifyNewExercise';
  }

  findAll() {
    return `This action returns all notifyNewExercises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notifyNewExercise`;
  }

  update(id: number, updateNotifyNewExerciseDto: UpdateNotifyNewExerciseDto) {
    return `This action updates a #${id} notifyNewExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} notifyNewExercise`;
  }
}
