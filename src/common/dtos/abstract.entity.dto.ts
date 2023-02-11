import { ApiProperty } from '@nestjs/swagger';
import { Base } from '../../models/common/base.entity';

export class AbstractEntityDto {
  @ApiProperty()
  id: number | string;

  constructor(entity: Base, options?: { excludeFields: boolean }) {
    if (!options.excludeFields) {
      this.id = entity.id;
    }
  }

  static toDto(entity: Base) {
    return new this(entity);
  }

  static toDtos(collection: Base[]) {
    return collection.map((entity) => this.toDto(entity));
  }
}
