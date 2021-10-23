import { Test, TestingModule } from '@nestjs/testing';
import { AgendamientoService } from './agendamiento.service';

describe('AgendamientoService', () => {
  let agendamiento: AgendamientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamientoService],
    }).compile();

    agendamiento = module.get<AgendamientoService>(AgendamientoService);
  });

  it('should be defined', () => {
    expect(agendamiento).toBeDefined();
  });
});
