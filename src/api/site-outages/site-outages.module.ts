import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteOutagesRepository } from './site-outages.repository';
import { SiteOutagesService } from './site-outages.service';
import { SiteOutagesController } from './site-outages.controller';
import { SiteOutages } from '../../models/device.entity';
import { SiteInfoModule } from '../siteInfo/site-info.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([SiteOutages], 'postgres'),
    SiteInfoModule,
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 5,
    }),
  ],
  providers: [
    SiteOutagesService,
    SiteOutagesRepository,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
  controllers: [SiteOutagesController],
  exports: [SiteOutagesService],
})
export class SiteOutageModule {}
