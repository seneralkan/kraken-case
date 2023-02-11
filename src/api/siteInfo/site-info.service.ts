import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { SiteInfoRepository } from './site-info.repository';
import { SiteInfo } from '../../models/site-info.entity';
import { SiteInfoCreateDto } from './dtos/site-info.create.dto';
import { SiteInfoNotFound } from './exceptions/site-info-not-found.exception';

@Injectable()
export class SiteInfoService {
  constructor(
    @Inject(forwardRef(() => SiteInfoRepository))
    private readonly repository: SiteInfoRepository,
  ) {}

  public async findBySiteId(id: string): Promise<SiteInfo> {
    const siteInfo = await this.repository.findBySiteId(id);
    if (!siteInfo) throw new SiteInfoNotFound();
    return siteInfo;
  }

  public async createSiteInfo(data: SiteInfoCreateDto): Promise<SiteInfo> {
    return await this.repository.createSiteInfo(data);
  }
}
