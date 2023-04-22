import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { CreateExerciseDiaryDto, UpdateExerciseDiaryDto } from '@fit-friends/shared-dto';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExeciseDiaryApiOperation } from '@fit-friends/shared-description-operation';
import { ExerciseDiaryRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.ExersiceDiary)
@Controller(ApiRouteEnum.ExersiceDiary)
export class ExerciseDiaryController {
  constructor(private readonly exerciseDiaryService: ExerciseDiaryService) {}

  @ApiOperation({summary: ExeciseDiaryApiOperation.Create})
  @ApiResponse({
    type: ExerciseDiaryRdo,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createExerciseDiaryDto: CreateExerciseDiaryDto) {
    return this.exerciseDiaryService.create(createExerciseDiaryDto, userId);
  }

  @ApiOperation({summary: ExeciseDiaryApiOperation.FindAll})
  @ApiResponse({
    type: ExerciseDiaryRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return this.exerciseDiaryService.findAll(userId);
  }

  @ApiOperation({summary: ExeciseDiaryApiOperation.Update})
  @ApiResponse({
    type: ExerciseDiaryRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })  
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ParameterKey.Rout)
  public async update(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) exerciseDiaryid: string,
    @Body() updateExerciseDiaryDto: UpdateExerciseDiaryDto
  ) {
    return this.exerciseDiaryService.update(exerciseDiaryid, userId, updateExerciseDiaryDto);
  }
}
