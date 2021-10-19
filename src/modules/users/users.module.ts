import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { Users } from '@app/db/models';
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
        ])
    ],
    providers: [
        UsersResolver,
        UsersService,
        CoreModule,
    ]

})

export class UsersModule { }
