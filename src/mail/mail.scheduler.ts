import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

@Injectable()
export class MailScheduler {
  private readonly logger = new Logger(MailScheduler.name);

  constructor(
    private mailService: MailService,
    private configService: ConfigService,
  ) {}

  // @Cron(process.env.CRON_SCHEDULE || '0 * * * * *')
  // async handleCron(): Promise<void> {
  //   this.logger.log('Scheduler triggered - sending email...');
  //   await this.mailService.sendMail();
  // }
}
