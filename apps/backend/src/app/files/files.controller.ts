import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiRouteEnum, ParametrKey } from '@fit-friends/shared-types';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExerciseValidation, UserValidation } from '@fit-friends/shared-validation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(ApiRouteEnum.Files)
@Controller(ApiRouteEnum.Files)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post(ApiRouteEnum.Avatar)
  @UseInterceptors(FileInterceptor(ParametrKey.File))
  public async uploadAvatar(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: UserValidation.Avatar.maxSize }),
          new FileTypeValidator({ fileType: UserValidation.Avatar.fileType }),
        ],
      })
    )
    file: Express.Multer.File,
  ) {
    return this.filesService.uploadAvatar(file.filename);
  }

  @Post(ApiRouteEnum.Certificate)
  @UseInterceptors(FileInterceptor(ParametrKey.File))
  public async uploadCertificate(
    @UploadedFile(
      new ParseFilePipe({
        validators: [          
          new FileTypeValidator({ fileType: UserValidation.Certificate.fileType }),
        ],
      })
    )
    file: Express.Multer.File,
  ) {
    return this.filesService.uploadCertificate(file.filename);
  }

  @Post(ApiRouteEnum.Video)
  @UseInterceptors(FileInterceptor(ParametrKey.File))
  public async uploadVideo(
    @UploadedFile(
      new ParseFilePipe({
        validators: [          
          new FileTypeValidator({ fileType: ExerciseValidation.Video.fileType }),
        ],
      })
    )
    file: Express.Multer.File,
  ) {
    return this.filesService.uploadVideo(file.filename);
  }

}
