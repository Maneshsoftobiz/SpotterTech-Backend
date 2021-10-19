import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@app/db/entities';
import { Repository } from 'typeorm';
import { CreateUserInput } from "./users.input";
import { CoreModule } from '../core/core.module';

/**
 * @Type - @class- UserService
 * @name UserService
 * @description Need to use userService to load Entity to use in typeOrm with graphQl.
 */
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
        private readonly coreModule: CoreModule,
    ) { }


    /**
     * @Type - @function
     * @name user
     * @description Get single user record with id.
     */
    async getUser(id: number): Promise<Users> {
        return this.usersRepository.findOne({ id });
    }

    /**
     * @Type - @function
     * @name users
     * @description Get all the records in UserEntity defined table.
     */
    async getUsers(): Promise<Users[]> {
        return await this.usersRepository.find();
    }
}
