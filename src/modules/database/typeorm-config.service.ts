import { Injectable } from "@nestjs/common";

import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import * as path from 'path';

/**
 * @Type - @class- for TypeOrm
 * @name TypeOrmConfigService
 * @description we can call all config variable by `databaseConfigService`for typeorm
 * @note entityPath we need to setup here because we use this on typeOrm
 * @return { T } response
 */
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private databaseConfigService: ConfigService) { }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const entityPath = path.resolve('dist/db/models/index{.ts,.js}');
    return {
      type: 'postgres',
      host: this.databaseConfigService.get('database.host'),
      port: this.databaseConfigService.get('database.port'),
      username: this.databaseConfigService.get('database.username'),
      password: this.databaseConfigService.get('database.password'),
      database: this.databaseConfigService.get('database.database'),
      entities: [entityPath],
      synchronize: true,
      logging: true,
      logger: 'file',
    };
  }
}
