import { Test, TestingModule } from '@nestjs/testing';
import { RoomGateWay } from './app.gateway';

describe('AppGateway', () => {
  let gateway: RoomGateWay;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomGateWay],
    }).compile();

    gateway = module.get<RoomGateWay>(RoomGateWay);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
