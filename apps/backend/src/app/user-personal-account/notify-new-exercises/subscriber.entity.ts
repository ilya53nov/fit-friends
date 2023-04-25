import { Entity } from "@fit-friends/core";
import { SubscriberInterface } from "@fit-friends/shared-types";

export class SubscriberEntity implements Entity<SubscriberEntity, SubscriberInterface>{
  public id: string;
  public subscribeDate: Date;
  public unsubscribeDate: Date;
  public isActiveSubscribe: boolean;
  public userId: string;
  public coachId: string;
  public lastNotifyDate: string;

  constructor(subscriber: SubscriberInterface) {
    this.fillEntity(subscriber);
  }

  toObject(): SubscriberEntity {
    return {...this};
  }

  fillEntity(entity: SubscriberInterface): void {
    this.id = entity.id;
    this.subscribeDate = entity.subscribeDate;
    this.unsubscribeDate = entity.unsubscribeDate;
    this.isActiveSubscribe = entity.isActiveSubscribe;
    this.userId = entity.userId;
    this.coachId = entity.coachId;
    this.lastNotifyDate = entity. lastNotifyDate;
  }  
}
