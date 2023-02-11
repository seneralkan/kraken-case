import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SiteInfoService } from './site-info.service';
import { FastifyReply } from 'fastify';
import { SiteInfoCreateDto } from './dtos/site-info.create.dto';
import { SiteInfoGetResponseDto } from './dtos/site-info.get.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  UnauthorizedResponseDto,
  ThrottlerResponseDto,
  BadRequestResponseDto,
} from '../../common/dtos';

@ApiTags('site-info')
@Controller('/site-info')
export class SiteInfoController {
  constructor(private service: SiteInfoService) {}

  @Get('/:siteId')
  @UseGuards(AuthGuard('api-key'))
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Returns information about a specific site.',
    description:
      'The site information contains the ID and name of the site. It also contains a list of devices that make up the site',
  })
  @ApiOkResponse({ type: SiteInfoGetResponseDto })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponseDto })
  @ApiTooManyRequestsResponse({ type: ThrottlerResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  async findBySiteIdHandler(
    @Param('siteId') siteId: string,
    @Res() reply: FastifyReply,
  ) {
    const siteInfo = await this.service.findBySiteId(siteId);
    reply.send(SiteInfoGetResponseDto.toDto(siteInfo));
  }

  @Post('/')
  @UseGuards(AuthGuard('api-key'))
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Returns created specific site.',
    description:
      'The site information contains the ID and name of the site. It also contains a list of devices that make up the site',
  })
  @ApiCreatedResponse({
    description: 'The site info records has been successfully created.',
    type: SiteInfoCreateDto,
  })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponseDto })
  @ApiTooManyRequestsResponse({ type: ThrottlerResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  async createHandler(
    @Body() data: SiteInfoCreateDto,
    @Res() reply: FastifyReply,
  ) {
    const newSiteInfo = await this.service.createSiteInfo(data);
    reply.send(newSiteInfo);
  }
}
