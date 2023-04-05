import { BaseQuery, fillObject } from '@fit-friends/core';
import { UpdateUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { RoleEnum } from '@fit-friends/shared-types';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUserDescription } from '../auth/auth.constants';
import { UserEntity } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  public async findAll(query: BaseQuery) {
    const users = await this.userRepository.findAll(query);
    
    return users.map((user) => user.role === RoleEnum.Coach ? fillObject(CoachUserRdo, user) : fillObject(SportsmanUserRdo, user));
  }

  public async findOne(id: string) {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new UnauthorizedException(AuthUserDescription.NotFound);
    }

    if (existUser.role === RoleEnum.Sportsman) {
      return fillObject(SportsmanUserRdo, existUser);
    }

    return fillObject(CoachUserRdo, existUser);
  }

  

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findById(userId);    
    const userEntity = new UserEntity({...user, ...updateUserDto});
    const updatedUser = await this.userRepository.update(userId, userEntity);

    return user.role === RoleEnum.Coach ? fillObject(CoachUserRdo, updatedUser) : fillObject(SportsmanUserRdo, updatedUser);
  }

}
