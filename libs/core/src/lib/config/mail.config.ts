import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService, registerAs } from '@nestjs/config';
import * as path from 'path';
import { ApiRouteEnum } from '@fit-friends/shared-types';

export const MailOption = {
  Key: 'mail',
  Host: {
    Key: 'mail.host',
    EnvKey: 'MAIL_SMTP_HOST',
  },
  Port: {
    Key: 'mail.port',
    EnvKey: 'MAIL_SMTP_PORT',    
  },
  User: {
    Key: 'mail.user',
    EnvKey: 'MAIL_USER_NAME',      
  },
  Password: {
    Key: 'mail.password',
    EnvKey: 'MAIL_USER_PASSWORD',     
  },
  From: {
    Key: 'mail.from',
    EnvKey: 'MAIL_FROM',        
  },
}

export const mailOptions = registerAs(MailOption.Key, () => ({
  host: process.env[MailOption.Host.EnvKey],
  port: process.env[MailOption.Port.EnvKey],
  user: process.env[MailOption.User.EnvKey],
  password: process.env[MailOption.Password.EnvKey],
  from: process.env[MailOption.From.EnvKey],
}));

const exerciseListHelper = (context: string[], options: { fn: (arg0: string) => string; }) => {
  let returnString = "";

  for (let i = 0; i < context.length; i++) {
    returnString = returnString + options.fn(context[i]);
  }

  return returnString;
};

export function getMailConfig(): MailerAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => ({
      transport: {
        host: configService.get<string>(MailOption.Host.Key),
        port: configService.get<number>(MailOption.Port.Key),
        secure: false,
        auth: {
          user: configService.get<string>(MailOption.User.Key),
          pass: configService.get<string>(MailOption.Password.Key)
        }
      },
      defaults: {
        from: configService.get<string>(MailOption.From.Key),
      },
      template: {
        dir: path.resolve(__dirname, ApiRouteEnum.Assets),
        adapter: new HandlebarsAdapter({'exerciseList': exerciseListHelper}),

        options: {
          strict: false
        }
      }
    }),
    inject: [ConfigService],
  }
}
