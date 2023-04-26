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
  filename?: string;
}

export default {
  init(providerOptions: ProviderOptions, settings: Settings) {
    return {
      send : async function(options: SendOptions) {
        return new Promise<void>((resolve) => {
          const { from, to, cc, bcc, replyTo, subject, text, html } = options;
          console.log(chalk.green('==================   Sending(pretending 😉) email...'));
          console.log(chalk.bgYellow('from:'), chalk.blue(from || settings.defaultFrom));
          console.log(chalk.bgYellow('to:'), chalk.blue(to));
          console.log(chalk.bgYellow('cc:'), chalk.blue(cc));
          console.log(chalk.bgYellow('bcc:'), chalk.blue(bcc));
          console.log(chalk.bgYellow('replyTo:'), chalk.blue(replyTo || settings.defaultReplyTo));
          console.log(chalk.bgGreen('subject:'), chalk.green(subject));
          console.log(chalk.bgGreen('text:'), chalk.green(text));
          console.log(chalk.bgGreen('html body: ======= '));
          console.log(chalk.greenBright(html));
          console.log(chalk.green('=================='));
          resolve();
        });
      },
    };
  },  
};
