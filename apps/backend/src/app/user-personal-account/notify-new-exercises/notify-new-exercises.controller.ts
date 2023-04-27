import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotifyNewExercisesApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.NotifyNewExercises)
@Controller(ApiRouteEnum.NotifyNewExercises)
export class NotifyNewExercisesController {
  constructor(
    private readonly notifyNewExercisesService: NotifyNewExercisesService
  ) {}

  @ApiOperation({summary: NotifyNewExercisesApiOperation.AddSubscribe})
  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
  })
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

  @ApiOperation({summary: NotifyNewExercisesApiOperation.RemoveSubscribe})
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
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

  @ApiOperation({summary: NotifyNewExercisesApiOperation.SendNotify})
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
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
