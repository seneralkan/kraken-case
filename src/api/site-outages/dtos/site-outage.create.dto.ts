import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class SiteOutageCreateDto {
  @ApiProperty({ example: '002b28fc-283c-47ec-9af2-ea287336dc1b' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  @IsUUID()
  deviceId: string;

  @ApiProperty({ example: 'Solar Panel 1' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  begin: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  end: Date;
}
