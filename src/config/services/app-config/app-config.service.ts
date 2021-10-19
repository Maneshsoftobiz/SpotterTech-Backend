import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * @Type - @class- for server
 * @name AppConfigService
 * @description we can call these function get port().You can see we access the port with `server` we registered in app.config
 * @note we can call these functions anywhere form app and it will return desired variable value form config.
 * @return { T } response
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) { }

  get port(): number {
    return this.configService.get('server.port');
  }

  get appEnv(): string {
    return this.configService.get('server.appEnv');
  }

  get isApiDocEnable(): boolean {
    return this.configService.get('server.isApiDocEnable');
  }

  get apiVersion(): boolean {
    return this.configService.get('server.apiVersion');
  }

  get apiDocBaseUrl(): boolean {
    return this.configService.get('server.apiDocBaseUrl');
  }

  get apiDocDesc(): boolean {
    return this.configService.get('server.apiDocDesc');
  }

  get apiDocHeading(): boolean {
    return this.configService.get('server.apiDocHeading');
  }

  get apiDocTags(): boolean {
    return this.configService.get('server.apiDocTags');
  }

  get appSalt(): string {
    return this.configService.get('server.appSalt');
  }

  get appSaltPrefix(): string {
    return this.configService.get('server.appSaltPrefix');
  }
}
