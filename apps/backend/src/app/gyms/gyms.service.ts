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

}
