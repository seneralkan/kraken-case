import { ApiProperty } from '@nestjs/swagger';

import { AbstractEntityDto } from '../../../common/dtos/abstract.entity.dto';
import type { SiteInfo } from '../../../models';

type DeviceType = {
  id: string;
  name: string;
};

export class SiteInfoGetResponseDto extends AbstractEntityDto {
  @ApiProperty({ example: 'pear-tree' })
  id: string;

  @ApiProperty({ example: 'Pear Tree' })
  name: string;

  @ApiProperty()
  devices: DeviceType[];

  constructor(entity: SiteInfo) {
    super(entity, { excludeFields: true });
    this.id = entity.siteId;
    this.name = entity.name;
    this.devices = entity.devices.map((device) => ({
      id: device.deviceId,
      name: device.name,
    }));
  }
}
