import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { SwaggerConfig } from './swagger.config';

export function createSwaggerDocument(app: INestApplication): OpenAPIObject {
  const { name, url, email } = SwaggerConfig.contact;
  const builder = new DocumentBuilder()
    .setTitle(SwaggerConfig.title)
    .setContact(name, url, email)
    .setDescription(SwaggerConfig.description)
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' })
    .setVersion(SwaggerConfig.version);
  for (const tag of SwaggerConfig.tags) {
    builder.addTag(tag);
  }
  const options = builder.build();
  return SwaggerModule.createDocument(app, options);
}
