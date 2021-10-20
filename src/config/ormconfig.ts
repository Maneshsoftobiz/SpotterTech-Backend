// import { ConnectionOptions } from 'typeorm';
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// import * as path from 'path';

// /**
//  * @Type - @config- For typeOrm with Database
//  * @name ConnectionOptions
//  * @description This ConnectionOptions used to access the database cred for app.
//  * @return { export } export the database configurations to use on time migrations,seeds with cli.
//  */
// const currentEnv = process.env.NODE_ENV || 'local';
// const envConfig: any = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), 'env', `.env.${currentEnv}`)));
// const entityPath = path.resolve('db/entities/**/*.entity{.ts,.js}');
// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: envConfig.DATABASE_HOST,
//   port: envConfig.DATABASE_PORT,
//   username: envConfig.DATABASE_USERNAME,
//   password: envConfig.DATABASE_PASSWORD,
//   database: envConfig.DATABASE_NAME,
//   entities: [entityPath],
//   synchronize: false,
//   logging: true,
//   logger: 'file',
//   migrations: ['src/db/migrations/*.ts'],
//   cli: {
//     migrationsDir: 'src/db/migrations',
//   },
// };

// export = config;
