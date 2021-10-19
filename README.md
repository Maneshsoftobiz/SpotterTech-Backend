# Introduction 
Project generated with [Nest CLI](https://docs.nestjs.com/cli/overview) version 7.1.2. The purpose of this project is to demonstrate directory structure and organization of code.

We are using latest Technologies like Nestjs with typeOrm with GraphQl for APIs
```console
GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.  
```

1. Overview

    * [Folder structure](#folder-structure)
    * [Code Scaffolding](#code-scaffolding)
    * [Graphql Module Demonstration](#graphql-module-demonstration)
    * [Further Help](#further-help)


# Folder Structure

```

├───env                                           # For application environment configuration for all environments 
│                                         
└───src                                        
    │            
    ├───config                                    # For configuration files.
    │   └───services                                 # For configuration services.
    |                            
    ├───db                                           # For database dependencies .     
    │   ├───migrations                               # For all migrations we created directory migrations .
    │   ├───entities                                   # For all entities we created directory entities.
    │   │     └───users                                  # For users entities entity.                                   
    │   └───seeders                                  # For all seeders we created directory seeders.              
    │                           
    ├───modules                                   # Application modules goes here.                              
    │       ├───app                                      
    │       │   └───app.module                    # This is the root module named as app.module.ts.      
    │       │   
    │       ├───core                              # In core module we will add all core code we need to add for app.  
    │       │ 
    |       ├───database                          # For database typeOrm, GraphQl configurations that was shared across all the modules
    │       │
    │       └───users                             # Users module
    │           ├───input                           # GraphQl inputs file where we will pass input fields for users   
    │           ├───resolver                        # Resolver to apply @query and @mutations for curd operations                   
    │           ├───service                         # Service for user module to run query in graphql. 
    │           └───type                            # type file to set type output in graphql. 
    │
    └───utils                                     # For utils of the application   
      

```
# Code Scaffolding

Run server
```console
nest start
```


To run code we need install all the packages by run command:
```console
 npm i 
 or
 npm install
 ```


Run server in watch mode
```console
nest start -- watch
```

Then open url on your local machine
http://localhost:3030/graphql

Generating a module 

```console
nest g module module-name
```
 
Generating a service 

```console
nest g service service-name
```

You can also use to generate  decorator|filter|class|guard|interface|middleware|provider with the above command

```console
nest g decorator|filter|class|guard|interface|interface|middleware|provider 
```

## Graphql Module Demonstration
We Just started a User module where we are getting data of a single user and all user at once by Graphql.

To achieve this we done work as following example : lets talk about users module

1. CreateUserInput class to define what we need for input 
```Javascript 

import { InputType, Field, Int } from "@nestjs/graphql";
import { MinLength, IsEmail } from "class-validator";


/**
 * @Type - @class- CreateUserInput
 * @name CreateUserInput
 * @description Need to use define input column for graphQl.
 */
@InputType()
export class CreateUserInput {
    //validation added here 
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
```
2. Resolver is used to interact with Graphql with help of typeOrm. In future we will write Insert, Update, Code in resolver file.

```javascript
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

```

3. We need to create Repo Services as UsersService look into following example.
```javascript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@app/db/entities';
import { Repository } from 'typeorm';
import { CreateUserInput } from "./users.input";
import { UserRoles } from '@app/db/entities/userRole/user.role.entity';
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
        @InjectRepository(UserRoles) private userRolesRepository: Repository<UserRoles>,
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

```

4. We create a module with help us to load typeorm and graphQL 

 ```javascript
 import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { Users } from '@app/db/entities';
import { UserRoles } from '@app/db/entities/userRole/user.role.entity';
import { CoreModule } from '../core/core.module';

/**
 * @Type - @Module- userModule 
 * @name UsersModule
 * @description All providers and entities need to define here for typeorm 
 */
@Module({
    imports: [
        TypeOrmModule.forFeature([
            Users,
            UserRoles
        ])
    ],
    providers: [
        UsersResolver,
        UsersService,
        CoreModule,
    ]

})

export class UsersModule { }

```

5.After all we need to add user module in our root module which is app module

```javascript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmConfigService } from '../database/typeorm-config.service';
import { AppConfigModule } from 'src/config/app-config.module';
import { UsersModule } from '../users/users.module';

/**
 * root module file 
*/
@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),   
    UsersModule,
  ],

})
export class AppModule { }

``` 
## Further Help
To get more help on Nest development you can go through the documentation of Nest [NestJS Documentation](https://docs.nestjs.com).

To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI Documentation](https://docs.nestjs.com/cli/usages).

To get more help on GraphQl go check out the [GraphQl](https://graphql.org/).