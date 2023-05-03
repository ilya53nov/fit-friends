const file: Express.Multer.File = {
  fieldname: '',
  originalname: '',
  encoding: '',
  mimetype: '',
  size: 1000,
  stream: null,
  destination: '',
  filename: 'file.jpg',
  path: './',
  buffer: null,  
}

const fileRdo = 'http://localhost:3333/training-1.jpg';

export const FilesMock = {
  File: file,
  FileRdo: fileRdo,
}
