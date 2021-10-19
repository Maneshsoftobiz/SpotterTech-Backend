import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';


/**
 * @function
 * @name initApplication
 * @description
 * Use to add enhancements to the app we are not including all the features in main.js we include all in loader and made them global.
 * i.e. we are adding here swagger, Filters, Interceptor, Guards etc.
 */
const initApplication = async (app) => {
  const configService = app.get(ConfigService);
  // app.setGlobalPrefix('v1'); // Global prefix
  app.useGlobalPipes(new ValidationPipe());

};
export {
  initApplication,
};
