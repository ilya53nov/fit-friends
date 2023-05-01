import { Entity } from '@fit-friends/core';
import { ReviewInterface } from '@fit-friends/shared-types';

export class ReviewsEntity implements Entity<ReviewsEntity, ReviewInterface>{
  public id: string;
  public authorId: string;
  public exerciseId: string;
  public score: number;
  public text: string;
  public createdAt: Date;  

  constructor(comment: ReviewInterface) {
    this.fillEntity(comment);
  } 

  toObject(): ReviewsEntity {
    return {...this};
  }
  
  fillEntity(entity: ReviewInterface): void {
    this.id = entity.id;
    this.authorId = entity.authorId;
    this.exerciseId = entity.exerciseId;
    this.score = entity.score;
    this.text = entity.text;
    this.createdAt = entity.createdAt; 
  }

}
