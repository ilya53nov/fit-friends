import { Injectable } from '@nestjs/common';
import { getAssetsPath, getRandomElement, getStaticPath } from '@fit-friends/core';
import { ApiRouteEnum } from '@fit-friends/shared-types';

const ASSETS_IMAGES = [
  'training-1.jpg',
  'training-2.jpg',
  'training-3.jpg',
  'training-4.jpg',
]

const staticPath = (fileName: string) => getStaticPath(process.env.HOST, process.env.PORT, ApiRouteEnum.Static, fileName);
const assetsPath = (fileName: string) => getAssetsPath(process.env.HOST, process.env.PORT, fileName);

@Injectable()
export class FilesService {  

  public async uploadAvatar(fileName: string) {
    return staticPath(fileName);
  }

  public async uploadCertificate(fileName: string) {
    return staticPath(fileName);
  }

  public async uploadVideo(fileName: string) {
    return staticPath(fileName);
  }

  public async getRandomAssetsImage() {
    const randomImage = getRandomElement(ASSETS_IMAGES);

    return assetsPath(randomImage);
  } 


}
