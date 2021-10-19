import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { UsersType } from "./users.type";
import { UsersService } from "./users.service";
import { CreateUserInput } from "./users.input";


/**
 * @Type - @class- UserResolver
 * @name UserResolver
 * @description This is the key class for graphQl with typeOrm,We can write here query and mutations.
 */
@Resolver(of => UsersType)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
    ) { }

    /**
    * @Type - @function
    * @name user
    * @description Get single user record with id.
    */
    @Query(() => UsersType)
    async user(@Args('id') id: number) {
        return this.usersService.getUser(id);
    }

    /**
    * @Type - @function
    * @name users
    * @description Get all the records in UserEntity defined table.
    */
    @Query(() => [UsersType])
    async users() {
        return this.usersService.getUsers();
    }
} 