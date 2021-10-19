import { InputType, Field, Int } from "@nestjs/graphql";
import { MinLength, IsEmail } from "class-validator";


/**
 * @Type - @class- CreateUserInput
 * @name CreateUserInput
 * @description Need to use define input column for graphQl.
 */
@InputType()
export class CreateUserInput {

    @MinLength(1)
    @Field()
    firstname: string;
    @MinLength(1)

    @Field()
    lastname: string;
    @MinLength(1)

    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;

    @Field(() => Int)
    roleId: number;

}