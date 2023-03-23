import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ConfigService, registerAs } from '@nestjs/config';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { join } from 'path';

export const StaticOption = {
  Key: 'static',
  Upload: {
    Key: 'static.upload',
    EnvKey: 'UPLOAD_DESTINATION',
  },
}

export const staticOptions = registerAs(StaticOption.Key, () => ({
  upload: process.env[StaticOption.Upload.EnvKey],
}));

export function getServeStaticConfig(configService: ConfigService): ServeStaticModuleOptions[] {
  const uploadFolder = configService.get<string>(StaticOption.Upload.Key);

  return [
    {
      rootPath: join(__dirname, uploadFolder!),
      serveRoot: `/${ApiRouteEnum.Static}`,
    },
  ];
}
