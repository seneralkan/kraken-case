import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SiteOutages } from '../../models/device.entity';
import { Repository } from 'typeorm';
import { SiteOutageCreateDto } from './dtos/site-outage.create.dto';

@Injectable()
export class SiteOutagesRepository {
  constructor(
    @InjectRepository(SiteOutages, 'postgres')
    private readonly repository: Repository<SiteOutages>,
  ) {}

  async createSiteOutages(
    data: SiteOutageCreateDto,
    siteId: number,
  ): Promise<SiteOutages> {
    const deviceOutage = new SiteOutages();
    const newDeviceOutage = Object.assign(deviceOutage, data);
    newDeviceOutage.siteId = siteId;
    await this.repository.save(newDeviceOutage);
    return deviceOutage;
  }

  async getAllOutages(): Promise<SiteOutages[]> {
    return await this.repository.find();
  }
}
