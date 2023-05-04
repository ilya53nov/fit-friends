import { Injectable } from '@nestjs/common';
import { GymsRepository } from './gyms.repository';
import { fillObject } from '@fit-friends/core';
import { GymRdo } from '@fit-friends/shared-rdo';

@Injectable()
export class GymsService {
  constructor(private readonly gymsRepository: GymsRepository) {}

  public async findAll() {
    const finded = await this.gymsRepository.findAll();
    
    return finded.map((item) => fillObject(GymRdo, item));
  }

  public async findById(id: number) {
    return await this.gymsRepository.findById(id);
  }

  public async findManyById(gymsId: number[]) {
    return await this.gymsRepository.findManyById(gymsId);
  } 

}
