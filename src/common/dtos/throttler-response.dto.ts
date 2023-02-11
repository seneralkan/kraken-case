import { ApiProperty } from '@nestjs/swagger';

export class ThrottlerResponseDto {
  @ApiProperty({ example: 429 })
  code: number;

  @ApiProperty({ example: 'ThrottlerException' })
  error: string;

  @ApiProperty({ example: 'ThrottlerException: Too Many Requests' })
  message: Date;
}
