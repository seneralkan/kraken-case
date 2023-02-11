import { Injectable } from '@nestjs/common';
import { HealthcheckResponseDto } from './dto/healthcheck.response.dto';

@Injectable()
export class HealthcheckService {
  async getHealth(): Promise<HealthcheckResponseDto> {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }
}
