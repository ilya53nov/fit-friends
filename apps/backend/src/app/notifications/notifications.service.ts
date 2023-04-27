import { CreateNotificationDto } from '@fit-friends/shared-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { NotificationsRepository } from './notifications.repository';
import { NotificationsEntity } from './notifications.entity';
import { fillObject } from '@fit-friends/core';
import { NotificationRdo } from '@fit-friends/shared-rdo';
import { NotificationsDescription } from './notifications.constants';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationsRepository:NotificationsRepository) {}

  public async create(createNotificationDto: CreateNotificationDto) {
    const entity = new NotificationsEntity(createNotificationDto);

    const newNotification = await this.notificationsRepository.create(entity);

    return fillObject(NotificationRdo, newNotification);
  }

  public async findAll(userId: string) {
    const notifications = await this.notificationsRepository.findAll(userId);

    return notifications.map((item) => fillObject(NotificationRdo, item));
  }

  public async remove(id: string) {
    const findedNotification = await this.notificationsRepository.findById(id);

    if (!findedNotification) {
      throw new NotFoundException(NotificationsDescription.NotFound);
    }

    await this.notificationsRepository.remove(id);
  }
  
}
