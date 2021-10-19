import { ObjectType, Field, Int } from "@nestjs/graphql";

/**
 * @Type - @class- UsersType
 * @name UsersType
 * @description Need to use define column for graphQl.
 */
@ObjectType('Users')
export class UsersType {
    @Field(() => Int)
    id: number;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field(() => Int)
    role_id: number;
}