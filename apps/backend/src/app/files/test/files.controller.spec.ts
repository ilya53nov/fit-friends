import { FilesController } from '../files.controller';
import { FilesService } from '../files.service';
import { Test } from '@nestjs/testing';
import { Mocks } from '../../../mocks/mocks';
import { FilesTestDescription } from './files-test.constants'

const mockService = {
  uploadAvatar: jest.fn().mockResolvedValue(Mocks.FilesMock.FileRdo),
  uploadCertificate: jest.fn().mockResolvedValue(Mocks.FilesMock.FileRdo),
  uploadVideo: jest.fn().mockResolvedValue(Mocks.FilesMock.FileRdo),
};

describe(FilesTestDescription.Controller, () => {
  let filesController: FilesController;
  let filesService: FilesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FilesService],
      controllers: [FilesController],
    })
      .overrideProvider(FilesService)
      .useValue(mockService)
      .compile();

    filesService = module.get<FilesService>(FilesService);
    filesController = module.get<FilesController>(FilesController);

    jest.clearAllMocks();
  });

  test(FilesTestDescription.UploadAvatar, async () => {
    const result = await filesController.uploadAvatar(Mocks.FilesMock.File);
    expect(filesService.uploadAvatar).toBeCalledWith(Mocks.FilesMock.File.filename);
    expect(result).toEqual(Mocks.FilesMock.FileRdo);
  });

  test(FilesTestDescription.UploadCertificate, async () => {
    const result = await filesController.uploadCertificate(Mocks.FilesMock.File);
    expect(filesService.uploadCertificate).toBeCalledWith(Mocks.FilesMock.File.filename);
    expect(result).toEqual(Mocks.FilesMock.FileRdo);
  });

  test(FilesTestDescription.UploadVideo, async () => {
    const result = await filesController.uploadVideo(Mocks.FilesMock.File);
    expect(filesService.uploadVideo).toBeCalledWith(Mocks.FilesMock.File.filename);
    expect(result).toEqual(Mocks.FilesMock.FileRdo);
  });

});
