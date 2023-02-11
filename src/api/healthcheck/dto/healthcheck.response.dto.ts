import { ApiResponseProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

export class HealthcheckResponseDto {
  @ApiResponseProperty({ example: 'OK' })
  @IsNotEmpty()
  status: string;

  @ApiResponseProperty({ example: '2022-10-11T10:31:10.193Z' })
  @IsDate()
  timestamp: string;
}
