import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage().rss,
      timestamp: new Date().toISOString(),
    };
  }
}
