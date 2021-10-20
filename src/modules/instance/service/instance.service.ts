/* eslint-disable @typescript-eslint/no-empty-function */
import { InstanceEntity } from '@app/db/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/**
 * @Type - @class- InstanceService
 * @name InstanceService
 * @description Need to use instanceService to load Entity
 *  to use use in typeOrm with graphql.
 */
@Injectable()
export class InstanceService {
  constructor(
    @InjectRepository(InstanceEntity)
    private instanceRepository: Repository<InstanceEntity>,
  ) {}

  // create new instance
  public async createInstance() {
    //
  }

  // get all instances
  public async getAllInstances() {
    //
  }

  // get instance by id
  public async getInstance() {
    //
  }

  // update instance by id
  public async updateInstance() {
    //
  }

  // delete instance by id
  public async deleteInstance() {
    //
  }
}
