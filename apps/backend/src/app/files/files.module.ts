import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { getMulterConfig } from '@fit-friends/core';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: getMulterConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesModule]
})
export class FilesModule {}
