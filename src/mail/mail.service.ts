import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('SMTP_LOGIN'),
        pass: this.configService.get<string>('SMTP_PASSWORD'),
      },
    });
  }

  async sendMail(): Promise<void> {
    const to = this.configService.get<string>('SMTP_USER');
    const from = this.configService.get<string>('EMAIL_SENDER');

    try {
      const info = await this.transporter.sendMail({
        from,
        to,
        subject: `Scheduled Email - ${new Date().toLocaleString()}`,
        text: `This is an automated scheduled email sent at ${new Date().toISOString()}`,
        html: `
          <h2>Scheduled Email Notification</h2>
          <p>This is an automated email sent by NestJS Scheduler.</p>
          <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
        `,
      });

      this.logger.log(`Email sent successfully to ${to} | MessageId: ${info.messageId}`);
    } catch (error) {
      this.logger.error(`Failed to send email: ${(error as Error).message}`);
    }
  }
}
