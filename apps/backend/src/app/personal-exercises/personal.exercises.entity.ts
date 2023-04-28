import { Entity } from "@fit-friends/core";
import { PersonalExerciseInterface } from "@fit-friends/shared-types";

export class PersonalExerciseEntity implements Entity<PersonalExerciseEntity, PersonalExerciseInterface>{
  public id: string;
  public initiatorId: string;
  public userId: string;
  public createdAt: Date;
  public updatedAt: Date;
  public status: string; 

  constructor(personalExercise: PersonalExerciseInterface) {
    this.fillEntity(personalExercise);
  }  
  
  toObject(): PersonalExerciseEntity {
    return {...this};
  }

  fillEntity(entity: PersonalExerciseInterface): void {
  this.id = entity.id;
  this.initiatorId = entity.initiatorId;
  this.userId = entity.userId;
  this.createdAt = entity.createdAt;
  this.updatedAt = entity.updatedAt;
  this.status = entity.status;
  }

}
