import { Test, TestingModule } from '@nestjs/testing';
import { SiteInfoRepository } from '../../src/api/siteInfo/site-info.repository';
import { SiteInfoService } from '../../src/api/siteInfo/site-info.service';
import {
  siteInfoCreateMock,
  siteInfoCreateResponseMock,
  siteInfoFindOneResponseMock,
} from '../mocks/siteInfo.mock';

describe('SiteInfoService', () => {
  let module: TestingModule;
  let service: SiteInfoService;
  let repository: SiteInfoRepository;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        SiteInfoService,
        {
          provide: SiteInfoRepository,
          useValue: {
            findBySiteId: jest
              .fn()
              .mockReturnValue(siteInfoFindOneResponseMock)
              .mockReturnValueOnce(siteInfoFindOneResponseMock)
              .mockReturnValueOnce(null),
            createSiteInfo: jest
              .fn()
              .mockReturnValue(siteInfoCreateResponseMock),
          },
        },
      ],
    }).compile();

    service = module.get<SiteInfoService>(SiteInfoService);
    repository = module.get<SiteInfoRepository>(SiteInfoRepository);
  });

  afterAll(async () => {
    await module.close();
  });

  it('service should defined', async () => {
    expect(service).toBeDefined();
  });
  it('repository should defined', async () => {
    expect(repository).toBeDefined();
  });

  describe('createSiteInfo', () => {
    it('should create a site info', async () => {
      const newSiteInfo = service.createSiteInfo(siteInfoCreateMock);
      expect(newSiteInfo).resolves.toEqual(siteInfoCreateResponseMock);
      const repoSpy = jest.spyOn(repository, 'createSiteInfo');
      expect(repoSpy).toBeCalledTimes(1);
      expect(repoSpy).toBeCalledWith(siteInfoCreateMock);
    });
  });

  describe('findBySiteId', () => {
    it('should find site info with devices', async () => {
      expect(
        service.findBySiteId(siteInfoFindOneResponseMock.siteId),
      ).resolves.toEqual(siteInfoFindOneResponseMock);
      service
        .findBySiteId(siteInfoFindOneResponseMock.siteId)
        .catch((e) => expect(e.response).toBe('Site does not exist.'));

      const repoSpy = jest.spyOn(repository, 'findBySiteId');
      expect(repoSpy).toBeCalledTimes(2);
      expect(repoSpy).toBeCalledWith(siteInfoFindOneResponseMock.siteId);
    });
  });
});
