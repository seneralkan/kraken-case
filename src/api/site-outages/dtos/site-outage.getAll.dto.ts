import { ApiProperty } from '@nestjs/swagger';

import { AbstractEntityDto } from '../../../common/dtos/abstract.entity.dto';
import type { SiteOutages } from '../../../models';

export class SiteOutageGetAllResponseDto extends AbstractEntityDto {
  @ApiProperty({ example: '002b28fc-283c-47ec-9af2-ea287336dc1b' })
  id: string;

  @ApiProperty({ example: '2022-05-23T12:21:27.377Z' })
  begin: Date;

  @ApiProperty({ example: '2022-11-13T02:16:38.905Z' })
  end: Date;

  constructor(entity: SiteOutages) {
    super(entity, { excludeFields: true });
    this.id = entity.deviceId;
    this.begin = entity.begin;
    this.end = entity.end;
  }
}
