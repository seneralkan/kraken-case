import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SiteInfoCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  siteId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
