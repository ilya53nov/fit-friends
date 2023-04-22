import {
  Controller,
  Get,
  Body,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { BalanceService } from './balance.service';
import { UpdateUserBalanceDto } from '@fit-friends/shared-dto';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserBalanceApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Balance)
@Controller(ApiRouteEnum.Balance)
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @ApiOperation({summary: UserBalanceApiOperation.FindAll})
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string) {
    return await this.balanceService.findAll(userId);
  }

  @ApiOperation({summary: UserBalanceApiOperation.Increment})
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.Increment)
  public async increment(
    @Body() updateBalanceDto: UpdateUserBalanceDto,
    @GetUser(ParameterKey.Id) userId: string
  ) {
    return await this.balanceService.increment(userId, updateBalanceDto);
  }

  @ApiOperation({summary: UserBalanceApiOperation.Decrement})
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.Decrement)
  public async decrement(
    @Body() updateBalanceDto: UpdateUserBalanceDto,
    @GetUser(ParameterKey.Id) userId: string
  ) {
    return await this.balanceService.decrement(userId, updateBalanceDto);
  }
}
