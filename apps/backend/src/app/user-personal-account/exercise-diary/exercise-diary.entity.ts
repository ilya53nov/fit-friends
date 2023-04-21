import { Entity } from '@fit-friends/core';
import { ExerciseDiaryInterface } from '@fit-friends/shared-types';

export class ExerciseDiaryEntity implements Entity<ExerciseDiaryEntity, ExerciseDiaryInterface>{
  public id?: string;
  public userId: string;
  public exerciseId: string;
  public caloriesSpentCount: number;
  public timeSpentExercise: number;
  public date: Date;

  constructor(foodDiary: ExerciseDiaryInterface) {
    this.fillEntity(foodDiary);
  }

  toObject(): ExerciseDiaryEntity {
    return {...this};
  }
  fillEntity(entity: ExerciseDiaryInterface): void {
    this.id = entity.id;
    this.userId = entity.userId;
    this.exerciseId = entity.exerciseId;
    this.caloriesSpentCount = entity.caloriesSpentCount;
    this.timeSpentExercise = entity.timeSpentExercise;
    this.date = entity.date;
  }
  
}
