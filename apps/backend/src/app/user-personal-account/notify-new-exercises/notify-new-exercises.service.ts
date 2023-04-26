import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { SubscriberRepository } from './subscriber.repository';
import { SubscriberEntity } from './subscriber.entity';
import { SubscriberInterface } from '@fit-friends/shared-types';

@Injectable()
export class NotifyNewExercisesService {
  constructor(private readonly subscriberRepository: SubscriberRepository) {}

  public async addSubscribe(userId: string, coachId: string) {
    const existSubscribe = await this.subscriberRepository.findSubscribe(userId, coachId);

    if (existSubscribe && existSubscribe.isActiveSubscribe) {
      throw new ConflictException('Вы уже подписаны на данного тренера')
    }

    const subscriber: SubscriberInterface = {
      coachId: coachId,
      userId: userId,
      isActiveSubscribe: true,
      subscribeDate: new Date(),
    }

    const subscriberEntity = new SubscriberEntity({...existSubscribe, ...subscriber});

    return await this.subscriberRepository.createOrUpdate(subscriberEntity);
  }

  //test
  public async findAll(userId: string, coachId: string) {
    return await this.subscriberRepository.findSubscribe(userId, coachId);
  }

  public async updateManyByCoachId(coachId: string, exerciseId: string) {
    await this.subscriberRepository.updateManyByCoachId(coachId, exerciseId);
  }


  public async removeSubscribe(userId: string, coachId: string) {
    const existSubscribe = await this.subscriberRepository.findSubscribe(userId, coachId);

    if (!existSubscribe || !existSubscribe.isActiveSubscribe) {
      throw new NotFoundException('Вы не подписаны на данного тренера');
    }

    const subscriberEntity = new SubscriberEntity(existSubscribe);

    subscriberEntity.isActiveSubscribe = false;

    return await this.subscriberRepository.update(existSubscribe.id, subscriberEntity);
  }


}
