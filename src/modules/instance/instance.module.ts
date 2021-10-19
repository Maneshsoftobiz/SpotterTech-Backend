import { Module } from '@nestjs/common';
import { InstanceService } from './service/instance.service';
import { InstanceResolver } from './resolver/instance.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstanceEntity } from '@app/db/models';

@Module({
  imports: [TypeOrmModule.forFeature([InstanceEntity])],
  providers: [InstanceService, InstanceResolver],
})
export class InstanceModule {}
