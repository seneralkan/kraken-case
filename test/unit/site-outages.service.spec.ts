import { Test, TestingModule } from '@nestjs/testing';
import { SiteOutagesRepository } from '../../src/api/site-outages/site-outages.repository';
import { SiteOutagesService } from '../../src/api/site-outages/site-outages.service';
import { SiteInfoService } from '../../src/api/siteInfo/site-info.service';
import { siteInfoFindOneResponseMock } from '../mocks/siteInfo.mock';
import {
  siteOutageAllMock,
  siteOutageCreateMock,
  siteOutageCreateResponseMock,
} from '../mocks/siteOutage.mock';

describe('SiteOutagesService', () => {
  let module: TestingModule;
  let service: SiteOutagesService;
  let siteInfoService: SiteInfoService;
  let repository: SiteOutagesRepository;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        SiteOutagesService,
        {
          provide: SiteInfoService,
          useValue: {
            findBySiteId: jest
              .fn()
              .mockReturnValue(siteInfoFindOneResponseMock)
              .mockReturnValueOnce(siteInfoFindOneResponseMock)
              .mockReturnValueOnce(null),
          },
        },
        {
          provide: SiteOutagesRepository,
          useValue: {
            createSiteOutages: jest
              .fn()
              .mockReturnValue(siteOutageCreateResponseMock[0]),
            getAllOutages: jest.fn().mockReturnValue(siteOutageAllMock),
          },
        },
      ],
    }).compile();

    service = module.get<SiteOutagesService>(SiteOutagesService);
    siteInfoService = module.get<SiteInfoService>(SiteInfoService);
    repository = module.get<SiteOutagesRepository>(SiteOutagesRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  it('service should defined', async () => {
    expect(service).toBeDefined();
  });
  it('site info service should defined', async () => {
    expect(siteInfoService).toBeDefined();
  });
  it('repository should defined', async () => {
    expect(repository).toBeDefined();
  });

  describe('createSiteOutages', () => {
    it('should create a site outage devices by given site id', async () => {
      const newSiteOutage = service.createSiteOutages(
        siteOutageCreateMock,
        siteInfoFindOneResponseMock.siteId,
      );
      expect(newSiteOutage).resolves.toEqual(siteOutageCreateResponseMock);
      const siteInfo = jest.spyOn(siteInfoService, 'findBySiteId');
      service
        .createSiteOutages(
          siteOutageCreateMock,
          siteInfoFindOneResponseMock.siteId,
        )
        .catch((e) => expect(e.response).toBe('Site does not exist.'));

      expect(siteInfo).toBeCalledTimes(2);
    });
  });

  describe('getAllOutages', () => {
    it('should get all site outages', async () => {
      const repoSpy = jest.spyOn(repository, 'getAllOutages');
      expect(service.getAllOutages()).resolves.toEqual(siteOutageAllMock);
      expect(repoSpy).toBeCalledTimes(1);
    });
  });
});
