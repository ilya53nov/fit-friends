import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { SubscriberRepository } from './subscriber.repository';
import { SubscriberEntity } from './subscriber.entity';
import { ApiRouteEnum, SubscriberInterface } from '@fit-friends/shared-types';
import { ExercisesRepository } from '../../exercises/exercises.repository';
import { MailerService } from '@nestjs-modules/mailer';
import { UserRepository } from '../../users/users.repository';
import { NotifyNewExercisesDescription } from './notify-new-exercises.constants';

@Injectable()
export class NotifyNewExercisesService {
  constructor(
    private readonly subscriberRepository: SubscriberRepository,
    private readonly exercisesRepository: ExercisesRepository,
    private readonly mailerService: MailerService,
    private readonly userRepository: UserRepository,
  ) {}

  public async addSubscribe(userId: string, coachId: string) {
    const existSubscribe = await this.subscriberRepository.findSubscribe(userId, coachId);

    if (existSubscribe && existSubscribe.isActiveSubscribe) {
      throw new ConflictException(NotifyNewExercisesDescription.FoundCoach)
    }

    const subscriber: SubscriberInterface = {
      coachId: coachId,
      userId: userId,
      isActiveSubscribe: true,
      subscribeDate: new Date(),
    }

    const subscriberEntity = new SubscriberEntity({...existSubscribe, ...subscriber});

    await this.subscriberRepository.createOrUpdate(subscriberEntity);
  }

  public async updateManyByCoachId(coachId: string, exerciseId: string) {
    await this.subscriberRepository.updateManyByCoachId(coachId, exerciseId);
  }

  public async sendNotify(userId: string) {
    const exercisesItems = await this.subscriberRepository.getExercisesId(userId);

    const exercisesId = [].concat(...exercisesItems.map((item) => item.exercisesId));

    const exercises = await this.exercisesRepository.findMany(exercisesId);

    const user = await this.userRepository.findById(userId);

    this.mailerService.sendMail({
      to: user.email,
      subject: NotifyNewExercisesDescription.NewExercises,
      template: ApiRouteEnum.NewExercisesTemplate,
      context: {
        user: user.name,
        exercises: exercises,
      }
    })

    await this.subscriberRepository.clearExerciseItems(userId);
  }

  public async removeSubscribe(userId: string, coachId: string) {
    const existSubscribe = await this.subscriberRepository.findSubscribe(userId, coachId);

    if (!existSubscribe || !existSubscribe.isActiveSubscribe) {
      throw new NotFoundException(NotifyNewExercisesDescription.NotFoundCoach);
    }

    const subscriberEntity = new SubscriberEntity(existSubscribe);

    subscriberEntity.isActiveSubscribe = false;

    await this.subscriberRepository.createOrUpdate(subscriberEntity);
  }

}
