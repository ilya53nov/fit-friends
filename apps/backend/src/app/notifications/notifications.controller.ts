import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AccessTokenGuard, GetUser } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey } from '@fit-friends/shared-types';
import { NotificationsApiOperation } from '@fit-friends/shared-description-operation';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotificationRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.Notifications)
@Controller(ApiRouteEnum.Notifications)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiOperation({summary: NotificationsApiOperation.FindAll})
  @ApiResponse({
    type: NotificationRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return await this.notificationsService.findAll(userId);
  }

  @ApiOperation({summary: NotificationsApiOperation.Remove})
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @UseGuards(AccessTokenGuard)
  @Delete(ParameterKey.Rout)
  public async remove(@Param(ParameterKey.Id) id: string) {
    return await this.notificationsService.remove(id);
  }
}
