import { Test, TestingModule } from '@nestjs/testing';
import { InstanceResolver } from './instance.resolver';

describe('InstanceResolver', () => {
  let resolver: InstanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstanceResolver],
    }).compile();

    resolver = module.get<InstanceResolver>(InstanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
