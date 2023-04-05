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
import { ApiRouteEnum, ParameterKey } from '@fit-friends/shared-types';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExerciseValidation, UserValidation } from '@fit-friends/shared-validation';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilesApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Files)
@Controller(ApiRouteEnum.Files)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiOperation({description: FilesApiOperation.UploadAvatar})
  @Post(ApiRouteEnum.Avatar)
  @UseInterceptors(FileInterceptor(ParameterKey.File))
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

  @ApiOperation({description: FilesApiOperation.UploadCertificate})
  @Post(ApiRouteEnum.Certificate)
  @UseInterceptors(FileInterceptor(ParameterKey.File))
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

  @ApiOperation({description: FilesApiOperation.UploadVideo})
  @Post(ApiRouteEnum.Video)
  @UseInterceptors(FileInterceptor(ParameterKey.File))
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
