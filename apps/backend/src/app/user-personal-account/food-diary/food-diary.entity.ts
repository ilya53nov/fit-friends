import { Entity } from '@fit-friends/core';
import { FoodDiaryInterface } from '@fit-friends/shared-types';

export class FoodDiaryEntity implements Entity<FoodDiaryEntity, FoodDiaryInterface>{
  public id?: string;
  public userId: string;
  public caloriesCount: number;
  public foodType: string;
  public date: Date;  

  constructor(foodDiary: FoodDiaryInterface) {
    this.fillEntity(foodDiary);
  }

  toObject(): FoodDiaryEntity {
    return {...this};
  }
  fillEntity(entity: FoodDiaryInterface): void {
    this.id = entity.id;
    this.userId = entity.userId;
    this.caloriesCount = entity.caloriesCount;
    this.foodType = entity.foodType;
    this.date = entity.date;
  }
  
}
