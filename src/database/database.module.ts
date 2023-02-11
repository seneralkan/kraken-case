import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMOptions } from '@config/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeORMOptions)],
})
export class DatabaseModule {}
