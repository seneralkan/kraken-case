import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@database';
import { ApiModule } from '@api';
import { configuration } from './config';
import { envVariableSchema } from './config/env-variable.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: envVariableSchema,
      validationOptions: {
        allowUnknown: true,
      },
      ignoreEnvFile: false,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    ApiModule,
  ],
})
export class AppModule {}
