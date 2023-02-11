import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { HealthcheckResponseDto } from './dto/healthcheck.response.dto';
import { HealthcheckService } from './healthcheck.service';

@ApiTags('health')
@Controller('/health')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Health check for the service.' })
  @ApiOkResponse({ type: HealthcheckResponseDto })
  async getHealth() {
    return this.healthcheckService.getHealth();
  }
}
