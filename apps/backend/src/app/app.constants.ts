export const BACKEND_ENV_FILE_PATH = './environments/.backend.env';

export enum EnvValidationMessage {
  JwtAccessSecretRequired = 'Jwt access secret is required',
  JwtRefreshSecretRequired = 'Jwt refresh secret is required',
  JwtAccessLifeTimeRequired = 'Jwt access life time is required',
  JwtRefreshLifeTimeRequired = 'Jwt refresh life time is required',
  UploadDestinationRequired = 'Upload destination is required',
  AppPortRequired = 'App port is required',
  AppHostRequired = 'App host is required',
  DatabaseUrlRequired = 'Database url is required',
}
