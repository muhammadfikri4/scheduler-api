import { Controller, Get } from '@nestjs/common';

@Controller('mail')
export class MailController {
  @Get()
  getStatus() {
    return {
      status: 'ok',
      service: 'nestjs-scheduler-email',
      timestamp: new Date().toISOString(),
    };
  }
}
