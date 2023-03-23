import { ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { join } from 'path';
import * as mime from 'mime-types';
import { StaticOption } from './static.config';

export function getMulterConfig(configService: ConfigService): MulterOptions {
  const uploadFolder = configService.get<string>(StaticOption.Upload.Key);

  return {
    storage: diskStorage({
      destination: join(__dirname, uploadFolder!),
      filename: (_req, file, callback) => {
        const extension = mime.extension(file.mimetype) ?? '';
        const filename = randomUUID();
        callback(null, `${filename}.${extension}`);
      },
    }),
  };
}
