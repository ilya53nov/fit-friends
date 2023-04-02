import { Entity } from '@fit-friends/core';
import { PurchaseInterface } from '@fit-friends/shared-types';

export class PurchaseEntity implements Entity<PurchaseEntity, PurchaseInterface>{
  public id: string;
  public purchaseType: string;
  public exerciseId: string;
  public userId: string;
  public priceExercise: number;
  public countExercise: number;
  public sum: number;
  public paymentMethod: string;
  
  constructor(purchase: PurchaseInterface) {
    this.fillEntity(purchase);
  }  
  
  toObject(): PurchaseEntity {
    return {...this};
  }
  fillEntity(entity: PurchaseInterface): void {
    this.id = entity.id
    this.purchaseType = entity.purchaseType
    this.exerciseId = entity.exerciseId
    this.userId = entity.userId
    this.priceExercise = entity.priceExercise
    this.countExercise = entity.countExercise
    this.sum = entity.sum
    this.paymentMethod = entity.paymentMethod
  }
  
}
