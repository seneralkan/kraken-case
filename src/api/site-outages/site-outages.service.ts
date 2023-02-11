import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { SiteOutagesRepository } from './site-outages.repository';
import { SiteOutageCreateDto } from './dtos/site-outage.create.dto';
import { SiteInfoService } from '../siteInfo/site-info.service';
import { SiteOutages } from '../../models';
import { SiteInfoNotFound } from '../siteInfo/exceptions/site-info-not-found.exception';

@Injectable()
export class SiteOutagesService {
  constructor(
    @Inject(forwardRef(() => SiteOutagesRepository))
    private readonly repository: SiteOutagesRepository,
    @Inject(forwardRef(() => SiteInfoService))
    private readonly siteInfoService: SiteInfoService,
  ) {}

  public async createSiteOutages(
    data: SiteOutageCreateDto[],
    siteId: string,
  ): Promise<SiteOutages[]> {
    const siteInfo = await this.siteInfoService.findBySiteId(siteId);
    if (!siteInfo) throw new SiteInfoNotFound();

    const devices = [];
    for (let i = 0; i < data.length; i++) {
      const device = await this.repository.createSiteOutages(
        data[i],
        siteInfo.id,
      );
      devices.push(device);
    }
    return devices;
  }

  public async getAllOutages(): Promise<SiteOutages[]> {
    return await this.repository.getAllOutages();
  }
}
