import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { initApplication } from './loader';
import { Logger } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('server.port');
  const baseUrl = process.env.APP_URL;
  await initApplication(app);
  await app.listen(port, () => {
    Logger.log(`App is running at ${baseUrl}:${port}/graphql`);
  });
}
bootstrap();
