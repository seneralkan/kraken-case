import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckService } from '../../src/api/healthcheck/healthcheck.service';

describe('HealthcheckService', () => {
  let module: TestingModule;
  let service: HealthcheckService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [HealthcheckService],
    }).compile();

    service = module.get<HealthcheckService>(HealthcheckService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('service should defined', async () => {
    expect(service).toBeDefined();
  });

  describe('getHealth', () => {
    it('should return status ok', async () => {
      expect(service.getHealth()).resolves.toEqual({
        status: 'OK',
        timestamp: new Date().toISOString(),
      });
    });
  });
});
