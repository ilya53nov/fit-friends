import { AccessTokenGuard, BaseQuery, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { UpdateUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { UsersApiOperation } from '@fit-friends/shared-description-operation'
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags(ApiRouteEnum.Users)
@Controller(ApiRouteEnum.Users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({description: UsersApiOperation.FindAll})
  @ApiQuery({schema: {example: getSchemaPath(BaseQuery)}, required: false})
  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
    status: HttpStatus.OK,
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@Query() query: BaseQuery) {
    return this.usersService.findAll(query);
  }

  @ApiOperation({description: UsersApiOperation.FindOne})
  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get(ParameterKey.Rout)
  public async findOne(@Param(ParameterKey.Id) id: string) {
    return this.usersService.findOne(id);
  }

  @ApiResponse({
    type: SportsmanUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    type: CoachUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.Update)
  public async update(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(userId, updateUserDto);
  } 

}
