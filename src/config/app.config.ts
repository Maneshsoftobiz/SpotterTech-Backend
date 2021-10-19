import { registerAs } from "@nestjs/config";

/**
 * @Type - @function- server
 * @name registerAs -server
 * @description as you see we import registerAs from nestjs inbuilt package for configurations.
 * @note -We can use all these environment variable in app as credentials with service we made for server.
 * @return { export } exports the database configurations to use on make connection to run with typeorm.
 */
export default registerAs('server', () => ({
  port: parseInt(process.env.APP_PORT, 10) || 8080,
  debug: process.env.APP_DEBUG || true,
  appEnv: process.env.APP_ENV || 'local',
  appSalt: process.env.APP_SALT || 'nyKWAL6ytUTpIK1VuuQP00Dx89cm48HJf9IP97gxnP8',
  appSaltPrefix: process.env.APP_SALT_PRE || '{b1o2i3l4e5r6p7l8a9t10e11}',
  isApiDocEnable: process.env.ENABLE_API_DOC || true,
  apiVersion: process.env.API_V || 'v1',
  apiDocBaseUrl: process.env.API_DOC_BASEURL || 'doc/api',
  apiDocHeading: process.env.API_DOC_HEADING || 'Doc Heading',
  apiDocDesc: process.env.API_DOC_DESC || 'Doc description',
  apiDocTags: 'Spottertech',
}));
