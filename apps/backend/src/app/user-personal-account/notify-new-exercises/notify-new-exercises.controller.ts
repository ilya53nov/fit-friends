import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';

@Controller('notify-new-exercises')
export class NotifyNewExercisesController {
  constructor(
    private readonly notifyNewExercisesService: NotifyNewExercisesService
  ) {}

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post(ParameterKey.Rout)
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) coachId: string,
  ) {
    return await this.notifyNewExercisesService.addSubscribe(userId, coachId);
  }

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(ParameterKey.Rout)
  public async findAll(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) coachId: string,
  ) {
    return await this.notifyNewExercisesService.findAll(userId, coachId);
  }

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(ParameterKey.Rout)
  public async remove(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) coachId: string,
  ) {
    return await this.notifyNewExercisesService.removeSubscribe(userId, coachId);
  }

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async sendNotify(
    @GetUser(ParameterKey.Id) userId: string,
  ) {
    return await this.notifyNewExercisesService.sendNotify(userId);
  }
}
