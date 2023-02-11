import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedResponseDto {
  @ApiProperty({ example: 401 })
  code: number;

  @ApiProperty({ example: 'UnauthorizedException' })
  error: string;

  @ApiProperty({ example: 'Unauthorized' })
  message: Date;
}
