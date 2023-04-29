import { CreatePersonalExerciseDto, UpdatePersonalExerciseDto } from '@fit-friends/shared-dto';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PersonalExercisesRepository } from './personal-exercises.repository';
import { UserRepository } from '../users/users.repository';
import { AuthUserDescription } from '../auth/auth.constants';
import { PersonalExerciseEntity } from './personal.exercises.entity';
import { fillObject } from '@fit-friends/core';
import { PersonalExerciseRdo } from '@fit-friends/shared-rdo';
import { PersonalExerciseStatusEnum } from '@fit-friends/shared-types';
import { NotificationsService } from '../notifications/notifications.service';
import { PersonalExercisesDescription } from './personal-exercises.constants';

@Injectable()
export class PersonalExercisesService {
  constructor(
    private readonly personalExercisesRepository: PersonalExercisesRepository,
    private readonly userRepository: UserRepository,
    private readonly notificationsService: NotificationsService,
  ) {}

  public async create(initiatorId: string, createPersonalExerciseDto: CreatePersonalExerciseDto) {
    const existUser = await this.userRepository.findById(createPersonalExerciseDto.userId);

    if (!existUser) {
      throw new NotFoundException(AuthUserDescription.NotFound);
    }

    const entity = new PersonalExerciseEntity({...createPersonalExerciseDto, initiatorId});

    entity.status = PersonalExerciseStatusEnum.Pending;

    const createdPersonalExercise = await this.personalExercisesRepository.create(entity);

    const initiator = await this.userRepository.findById(initiatorId);

    await this.notificationsService.create({userId: createPersonalExerciseDto.userId, text: `${initiator.name} ${PersonalExercisesDescription.Created}`})
    
    return fillObject(PersonalExerciseRdo, createdPersonalExercise);
  }

  public async update(id: string, userId: string, updatePersonalExerciseDto: UpdatePersonalExerciseDto) {
    const finded = await this.personalExercisesRepository.findById(id);

    if (!finded) {
      throw new NotFoundException(PersonalExercisesDescription.NotFound);
    }

    if (finded.userId !== userId) {
      throw new ForbiddenException(PersonalExercisesDescription.Forbidden);
    }

    if (finded.status === updatePersonalExerciseDto.status) {
      return fillObject(PersonalExerciseRdo, finded);
    }

    const entity = new PersonalExerciseEntity({...finded, ...updatePersonalExerciseDto});

    entity.updatedAt = new Date();

    const updated = await this.personalExercisesRepository.update(id, entity);

    let message;

    if (updatePersonalExerciseDto.status === PersonalExerciseStatusEnum.Accepted) {
      message = PersonalExercisesDescription.Accepted;
    }

    if (updatePersonalExerciseDto.status === PersonalExerciseStatusEnum.Rejected) {
      message = PersonalExercisesDescription.Rejected;
    }

    const user = await this.userRepository.findById(userId);

    await this.notificationsService.create({userId: updated.initiatorId, text: `${user.name} ${message}`})

    return fillObject(PersonalExerciseRdo, updated);
  }

}
