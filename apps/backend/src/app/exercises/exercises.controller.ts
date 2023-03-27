import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { CreateExerciseDto, UpdateExerciseDto } from '@fit-friends/shared-dto';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParametrKey, RoleEnum } from '@fit-friends/shared-types';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { ExercisesQuery } from './query/exercises.query';

@Controller(ApiRouteEnum.Exercises)
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParametrKey.Id) userId: string,
    @Body() createExerciseDto: CreateExerciseDto
  ) {
    return this.exercisesService.create(userId, createExerciseDto);
  }

  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(
    @GetUser(ParametrKey.Id) coachId: string,
    @Query() query: ExercisesQuery,
  ) {
    return this.exercisesService.findAll(coachId, query);
  }

  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
  @UseGuards(AccessTokenGuard)
  @Get(ParametrKey.Rout)
  public async findOne(@Param(ParametrKey.Id) id: string) {
    return this.exercisesService.findOne(id);
  }

  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })  
  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ParametrKey.Rout)
  public async update(
    @Param(ParametrKey.Id) exerciseId: string,
    @GetUser(ParametrKey.Id) coachId: string,
    @Body() updateExerciseDto: UpdateExerciseDto
  ) {
    return this.exercisesService.update(exerciseId, coachId, updateExerciseDto);
  }

}
