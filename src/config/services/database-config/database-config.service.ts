// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// /**
//  * @Type - @class- for database
//  * @name DatabaseConfigService
//  * @description we can call these function get host().You can see we access the port with `database`we registered in database.config
//  * @note we can call these functions anywhere form app and it will return desired value form config.
//  * @return { T } response
//  */
// @Injectable()
// export class DatabaseConfigService {
//   constructor(private configService: ConfigService) { }

//   get host() {
//     return this.configService.get('database.host');
//   }

//   get username() {
//     return this.configService.get('database.username');
//   }

//   get database() {
//     return this.configService.get('database.database');
//   }

//   get password() {
//     return this.configService.get('database.password');
//   }

//   get port() {
//     return this.configService.get('database.port');
//   }
// }
