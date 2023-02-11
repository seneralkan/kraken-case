import { Entity, Column, JoinColumn, Index, ManyToOne } from 'typeorm';
import { SiteInfo } from './site-info.entity';
import { Base } from './common/base.entity';

@Entity('device_outage')
export class SiteOutages extends Base {
  @Index()
  @Column({
    name: 'device_id',
    type: 'uuid',
    nullable: false,
  })
  deviceId: string;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'begin_date',
    type: 'timestamptz',
    nullable: false,
  })
  begin: Date;

  @Column({
    name: 'end_date',
    type: 'timestamptz',
    nullable: false,
  })
  end: Date;

  @Column({
    name: 'site_id',
    type: 'bigint',
    nullable: false,
  })
  siteId: number;

  // Site-Info
  @ManyToOne(() => SiteInfo, (site) => site.devices)
  @JoinColumn({ name: 'site_id' })
  site: SiteInfo;
}
