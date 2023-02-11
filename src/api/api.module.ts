import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { SiteInfoModule } from './siteInfo/site-info.module';
import { SiteOutageModule } from './site-outages/site-outages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HealthcheckModule, SiteInfoModule, SiteOutageModule, AuthModule],
})
export class ApiModule {}
