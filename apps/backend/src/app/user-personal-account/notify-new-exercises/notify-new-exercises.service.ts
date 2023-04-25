import { Injectable } from '@nestjs/common';
import { CreateNotifyNewExerciseDto } from './dto/create-notify-new-exercise.dto';
import { UpdateNotifyNewExerciseDto } from './dto/update-notify-new-exercise.dto';
import { SubscriberRepository } from './subscriber.repository';

@Injectable()
export class NotifyNewExercisesService {
  constructor(private readonly subscriberRepository: SubscriberRepository) {}

  public async create(userId: string, coachId: string) {
    
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
