import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './services/app-config/app-config.service';
import { DatabaseConfigService } from './services/database-config/database-config.service';
import * as path from 'path';
import server from "@config/app.config";
import database from "@config/database.config";

const loaders = [
  server,
  database,
];
const currentEnv = process.env.NODE_ENV || 'local';

/**
 * @module AppConfigModule
 * @description - this module is used to config module
 */

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: loaders,
      isGlobal: true,
      envFilePath: path.resolve(process.cwd(), 'env', `.env.${currentEnv}`),
      expandVariables: true,
    }),
  ],
  providers: [AppConfigService, DatabaseConfigService],
})
export class AppConfigModule { }
