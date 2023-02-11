import { Entity, Column, Index, OneToMany } from 'typeorm';
import { SiteOutages } from './device.entity';
import { Base } from './common/base.entity';

@Entity('site_info')
export class SiteInfo extends Base {
  @Index()
  @Column({
    name: 'site_id',
    type: 'varchar',
    nullable: false,
  })
  siteId: string;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  // Device
  @OneToMany(() => SiteOutages, (device) => device.site)
  devices: SiteOutages[];
}
