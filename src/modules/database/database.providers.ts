// import { ConfigService } from '@nestjs/config';

// /**
//  * @Type - @provider- Database
//  * @name databaseProviders - database
//  * @description as you see we import ConfigService from nestjs inbuilt package for configurations.
//  * @note -We can use all these environment variable in app as credentials with service we made for database.
//  * @return { export } exports the database databaseConfigService to use on make connection to run with typeorm.
//  */
// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: (databaseConfigService: ConfigService) => ({
//       type: 'postgres',
//       host: databaseConfigService.get('database.host'),
//       port: 3306,
//       username: databaseConfigService.get('database.username'),
//       password: databaseConfigService.get('database.password'),
//       database: databaseConfigService.get('database.database'),
//       entities: [
//         __dirname + '/../**/*.entity{.ts,.js}',
//       ],
//       synchronize: true,
//     }),
//   },
// ];
