import { registerAs } from "@nestjs/config";

/**
 * @Type - @function- Database
 * @name registerAs - database
 * @description as you see we import registerAs from nestjs inbuilt package for configurations.
 * @note -We can use all these environment variable in app as credentials with service we made for database.
 * @return { export } exports the database configurations to use on make connection to run with typeorm.
 */
export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
}));
