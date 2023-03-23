import { PortDB } from '@fit-friends/shared-types';
import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, Max, Min, validateSync } from 'class-validator';
import { EnvValidationMessage } from './app.constants';

class EnvironmentsConfig {
  @IsString({
    message: EnvValidationMessage.JwtAccessSecretRequired
  })
  public JWT_ACCESS_SECRET: string;

  @IsString({
    message: EnvValidationMessage.JwtRefreshSecretRequired
  })  
  public JWT_REFRESH_SECRET: string;

  @IsString({
    message: EnvValidationMessage.JwtAccessLifeTimeRequired
  })  
  public JWT_ACCESS_LIFE_TIME: string;

  @IsString({
    message: EnvValidationMessage.JwtRefreshLifeTimeRequired
  })
  public JWT_REFRESH_LIFE_TIME: string;

  @IsString({
    message: EnvValidationMessage.UploadDestinationRequired
  })  
  public UPLOAD_DESTINATION: string;

  @IsNumber({}, {
    message: EnvValidationMessage.AppPortRequired
  })
  @Min(PortDB.Min)
  @Max(PortDB.Max)  
  public PORT: number;

  @IsString({
    message: EnvValidationMessage.AppHostRequired
  })    
  public HOST: string;

  @IsString({
    message: EnvValidationMessage.DatabaseUrlRequired
  })  
  public DATABASE_URL: string;
}

export function validateEnvironments(config: Record<string, unknown>) {
  const environmentsConfig = plainToInstance(
    EnvironmentsConfig,
    config,
    { enableImplicitConversion: true  },
  );

  const errors = validateSync(
    environmentsConfig, {
      skipMissingProperties: false
    }
  );

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}
