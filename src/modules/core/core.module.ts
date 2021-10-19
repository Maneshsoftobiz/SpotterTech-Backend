import { Module } from '@nestjs/common';
import * as crypto from "crypto";

@Module({})
export class CoreModule {

    /**
     * generates random string of characters i.e salt
     * @function
     * @param {number} length - Length of the random string.
     */
    genRandomString(length: number = 16): string {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0, length); /** return required number of characters */
    }

    /**
     * hash password with sha512.
     * @function
     * @param {string} password - List of required fields.
     * @param {string} salt - Data to be validated.
     */
    sha512(password: string, salt: string, length: number = 32) {
        const hash = crypto.createHmac('SHA512', salt); /** Hashing algorithm sha512 */
        hash.update(password);
        const value = hash.digest('hex');
        return {
            salt: salt,
            passwordHash: value,
        };
    }
}
