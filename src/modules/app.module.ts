import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmConfigService } from './database/typeorm-config.service';
import { AppConfigModule } from 'src/config/app-config.module';

import { UsersModule } from './users/users.module';
import { InstanceModule } from './instance/instance.module';

/**
 * root module file
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // playground: true,
    }),
    
    AppConfigModule,
    UsersModule,
    InstanceModule,
  ],
})
export class AppModule {}
