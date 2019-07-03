import { Test, TestingModule } from '@nestjs/testing';
import { MensagesController } from './mensages.controller';

describe('Mensages Controller', () => {
  let controller: MensagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensagesController],
    }).compile();

    controller = module.get<MensagesController>(MensagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
