import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ConfigService, registerAs } from '@nestjs/config';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { join } from 'path';

export const staticOptions = registerAs('static', () => ({
  upload: process.env['UPLOAD_DESTINATION'],
}));

export function getServeStaticConfig(configService: ConfigService): ServeStaticModuleOptions[] {
  const uploadFolder = configService.get<string>('static.upload');

  return [
    {
      rootPath: join(__dirname, uploadFolder),
      serveRoot: `/${ApiRouteEnum.Static}`,
    },
  ];
}
