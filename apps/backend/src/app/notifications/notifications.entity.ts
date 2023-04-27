import { Entity } from '@fit-friends/core';
import { NotificationInterface } from '@fit-friends/shared-types';

export class NotificationsEntity implements Entity<NotificationsEntity, NotificationInterface>{
  public id: string
  public createdAt: Date;
  public userId: string;
  public text: string;
  
  constructor(notification: NotificationInterface) {
    this.fillEntity(notification);
  } 
  
  toObject(): NotificationsEntity {
    return {...this};
  }

  fillEntity(entity: NotificationInterface): void {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.userId = entity.userId;
    this.text = entity.text;
  }

}
