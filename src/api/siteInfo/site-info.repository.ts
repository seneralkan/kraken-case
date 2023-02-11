import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SiteInfo } from '../../models/site-info.entity';
import { Repository } from 'typeorm';
import { SiteInfoCreateDto } from './dtos/site-info.create.dto';

@Injectable()
export class SiteInfoRepository {
  constructor(
    @InjectRepository(SiteInfo, 'postgres')
    private readonly repository: Repository<SiteInfo>,
  ) {}

  async findBySiteId(id: string): Promise<SiteInfo> {
    return await this.repository.findOne({
      where: { siteId: id },
      relations: {
        devices: true,
      },
    });
  }

  async createSiteInfo(data: SiteInfoCreateDto): Promise<SiteInfo> {
    const siteInfo = new SiteInfo();
    const newSiteInfo = Object.assign(siteInfo, data);
    await this.repository.save(newSiteInfo);
    return siteInfo;
  }
}
