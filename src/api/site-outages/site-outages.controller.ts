import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseArrayPipe,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SiteOutagesService } from './site-outages.service';
import { FastifyReply } from 'fastify';
import { SiteOutageCreateDto } from './dtos/site-outage.create.dto';
import { SiteOutageGetAllResponseDto } from './dtos/site-outage.getAll.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  UnauthorizedResponseDto,
  ThrottlerResponseDto,
  BadRequestResponseDto,
} from '../../common/dtos';

@ApiTags('site-outages')
@Controller('site-outages')
export class SiteOutagesController {
  constructor(private service: SiteOutagesService) {}

  @Get('/')
  @UseGuards(AuthGuard('api-key'))
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Returns all outages in our system.',
    description:
      'An outage is when a device can no longer provide service and is declared as offline. Each outage consists of a device ID, begin time, and end time.',
  })
  @ApiOkResponse({ type: [SiteOutageGetAllResponseDto] })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponseDto })
  @ApiTooManyRequestsResponse({ type: ThrottlerResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  async getAllHandler(@Res() reply: FastifyReply) {
    const outages = await this.service.getAllOutages();
    reply.send(SiteOutageGetAllResponseDto.toDtos(outages));
  }

  @Post('/:siteId')
  @UseGuards(AuthGuard('api-key'))
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Posts outages for a specific site with enhanced information.',
    description:
      'The outages posted should contain a device ID, device name, begin time, and end time.',
  })
  @ApiBody({ type: [SiteOutageCreateDto] })
  @ApiCreatedResponse({
    description:
      'The site outage devices records has been successfully created.',
    type: [SiteOutageCreateDto],
  })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponseDto })
  @ApiTooManyRequestsResponse({ type: ThrottlerResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  async createHandler(
    @Param('siteId') siteId: string,
    @Body(new ParseArrayPipe({ items: SiteOutageCreateDto }))
    data: SiteOutageCreateDto[],
    @Res() reply: FastifyReply,
  ) {
    const devices = await this.service.createSiteOutages(data, siteId);
    reply.send(devices);
  }
}
