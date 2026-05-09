import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailScheduler } from './mail.scheduler';

@Module({
  providers: [MailService, MailScheduler],
})
export class MailModule {}
