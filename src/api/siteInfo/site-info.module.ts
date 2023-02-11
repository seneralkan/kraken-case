import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteInfo } from '../../models/site-info.entity';
import { SiteInfoService } from './site-info.service';
import { SiteInfoRepository } from './site-info.repository';
import { SiteInfoController } from './site-Info.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    TypeOrmModule.forFeature([SiteInfo], 'postgres'),
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 5,
    }),
  ],
  providers: [
    SiteInfoService,
    SiteInfoRepository,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
  controllers: [SiteInfoController],
  exports: [SiteInfoService],
})
export class SiteInfoModule {}
