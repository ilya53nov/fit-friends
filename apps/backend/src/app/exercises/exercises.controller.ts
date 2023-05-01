import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { CreateExerciseDto, UpdateExerciseDto } from '@fit-friends/shared-dto';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { ExercisesQuery } from './query/exercises.query';
import { ExercisesApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Exercises)
@Controller(ApiRouteEnum.Exercises)
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @ApiOperation({summary: ExercisesApiOperation.Create})
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
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createExerciseDto: CreateExerciseDto
  ) {
    return this.exercisesService.create(userId, createExerciseDto);
  }

  @ApiOperation({summary: ExercisesApiOperation.FindAllByCoachId})
  @ApiQuery({schema: {example: getSchemaPath(ExercisesQuery)}, required: false})
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
  @Get(ApiRouteEnum.My)
  public async findAllByCoachId(
    @GetUser(ParameterKey.Id) coachId: string,
    @Query() query: ExercisesQuery,
  ) {
    return this.exercisesService.findAllByCoachId(coachId, query);
  }

  @ApiOperation({summary: ExercisesApiOperation.FindAll})
  @ApiQuery({schema: {example: getSchemaPath(ExercisesQuery)}, required: false})
  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.OK,
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(
    @Query() query: ExercisesQuery,
  ) {
    return this.exercisesService.findAll(query);
  }

  @ApiOperation({summary: ExercisesApiOperation.FindOne})
  @ApiResponse({
    type: ExerciseRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
  @UseGuards(AccessTokenGuard)
  @Get(ParameterKey.Rout)
  public async findOne(@Param(ParameterKey.Id) id: string) {
    return this.exercisesService.findOne(id);
  }

  @ApiOperation({summary: ExercisesApiOperation.Update})
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
  @Patch(ParameterKey.Rout)
  public async update(
    @Param(ParameterKey.Id) exerciseId: string,
    @GetUser(ParameterKey.Id) coachId: string,
    @Body() updateExerciseDto: UpdateExerciseDto
  ) {
    return this.exercisesService.update(exerciseId, coachId, updateExerciseDto);
  }

}
