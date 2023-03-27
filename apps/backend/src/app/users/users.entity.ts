import { Entity } from '@fit-friends/core';
import { UserType } from '@fit-friends/shared-types';
import { hash, verify} from 'argon2';

export class UserEntity implements Entity<UserEntity, UserType> {
  public id: string;
  public name: string;
  public email: string;
  public avatar: string;
  public passwordHash: string;
  public refreshTokenHash: string;
  public gender: string;
  public dateBirth: Date;
  public role: string;
  public locationDefault: string;
  public exerciseLevel: string;
  public exerciseTypes: string[];
  public durationTraining?: string;
  public caloriesResetCount?: number;
  public caloriesSpendPerDayCount?: number;
  public isReadyUser?: boolean;
  public comment?: string;
  public certificate?: string;
  public isReadyCoach?: boolean;

  constructor(user: UserType) {
    this.fillEntity(user);
  }

  private async getHash(hashString: string): Promise<string> {
    return await hash(hashString);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    this.passwordHash = await this.getHash(password);
    return this;
  }

  public async setRefreshToken(token: string): Promise<UserEntity> {
    this.refreshTokenHash = await this.getHash(token);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await verify(this.passwordHash, password);
  }

  public async compareRefreshToken(token: string): Promise<boolean> {
    return await verify(this.refreshTokenHash, token);
  }

  toObject(): UserEntity {
    return {...this};
  }
  fillEntity(entity: UserType): void {
    this.id = entity.id;
    this.name = entity.name;
    this.email = entity. email;
    this.avatar = entity.avatar;
    this.passwordHash = entity.passwordHash;
    this.refreshTokenHash = entity.refreshTokenHash;
    this.gender = entity.gender;
    this.dateBirth = entity.dateBirth;
    this.role = entity.role;
    this.locationDefault = entity.locationDefault;
    this.exerciseLevel = entity.exerciseLevel;
    this.exerciseTypes = entity.exerciseTypes;
    this.durationTraining = entity.durationTraining;
    this.caloriesResetCount = entity.caloriesResetCount;
    this.caloriesSpendPerDayCount = entity.caloriesSpendPerDayCount;
    this.isReadyUser = entity.isReadyUser;
    this.comment = entity.comment;
    this.certificate = entity.certificate;
    this.isReadyCoach = entity.isReadyCoach;
  }
  
}
