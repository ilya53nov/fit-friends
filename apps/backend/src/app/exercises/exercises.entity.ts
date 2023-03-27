import { Entity } from '@fit-friends/core';
import { ExerciseInterface } from '@fit-friends/shared-types';

export class ExerciseEntity implements Entity<ExerciseEntity, ExerciseInterface> {
  public id: string;
  public title: string;
  public image: string;
  public level: string;
  public type: string;
  public duration: string;
  public price: number;
  public caloriesCount: number;
  public description: string;
  public gender: string;
  public video: string;
  public rating: number;
  public coachId: string;
  public isSpecialOffer: boolean;  

  constructor(exercise: ExerciseInterface) {
    this.fillEntity(exercise);
  }
  
  toObject(): ExerciseEntity {
    return {...this};
  }

  fillEntity(entity: ExerciseInterface): void {
    this.id = entity.id;
    this.title = entity.title;
    this.image = entity.image;
    this.level = entity.level;
    this.type = entity.type;
    this.duration = entity.duration;
    this.price = entity.price;
    this.caloriesCount = entity.caloriesCount;
    this.description = entity.description;
    this.gender = entity.gender;
    this.video = entity.video;
    this.rating = entity.rating;
    this.coachId = entity.coachId;
    this.isSpecialOffer = entity.isSpecialOffer;
  }
  
}
