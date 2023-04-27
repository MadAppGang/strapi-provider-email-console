import chalk from 'chalk';

interface Settings {
  defaultFrom: string;
  defaultReplyTo: string;
}

interface SendOptions {
  from?: string;
  to: string;
  cc: string;
  bcc: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  [key: string]: unknown;
}

interface ProviderOptions {
  logger?: any
}

export default {
  provider: 'srtapi-provider-email-console-colour',
  name: 'srtapi-provider-email-console-colour',

  init(providerOptions: ProviderOptions, settings: Settings) {
    return {
      send : async function(options: SendOptions) {
        return new Promise<void>((resolve) => {
          const { from, to, cc, bcc, replyTo, subject, text, html } = options;
          const l = providerOptions.logger ?? console.log
          l(chalk.green('==================   Sending(pretending 😉) email...'));
          l(`${chalk.bgYellow('from:')} ${chalk.blue(from || settings.defaultFrom)}`);
          l(`${chalk.bgYellow('to:')} ${chalk.blue(to)}`);
          if (cc) l(`${chalk.bgYellow('cc:')} ${chalk.blue(cc)}`);          
          if (bcc) l(`${chalk.bgYellow('bcc:')} ${chalk.blue(bcc)}`);
          l(`${chalk.bgYellow('replyTo:')} ${chalk.blue(replyTo || settings.defaultReplyTo)}`);
          l(`${chalk.bgGreen('subject:')} ${chalk.green(subject)}`);
          if (text) l(`${chalk.bgGreen('text:')} ${chalk.green(text)}`);
          l(`${chalk.bgGreen('html body: ======= ')}`);
          l(chalk.greenBright(html));
          l(chalk.bgGreen('==================='));
          resolve();
        });
      },
    };
  },  
};


