import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { MailScheduler } from './mail.scheduler';

@Module({
  controllers: [MailController],
  providers: [MailService, MailScheduler],
})
export class MailModule {}
