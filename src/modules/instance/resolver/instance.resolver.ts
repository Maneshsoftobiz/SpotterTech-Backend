import { Resolver } from '@nestjs/graphql';
import { InstanceService } from '../service/instance.service';

/**
 * @Type - @class- InstanceResolver
 * @name InstanceResolver
 * @description This is the key class for graphQl with typeOrm,We can write here query and mutations.
 */
@Resolver()
export class InstanceResolver {
  constructor(private instanceService: InstanceService) {}

  
}
