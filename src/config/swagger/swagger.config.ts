import { configuration } from '@config/server';

const configService = configuration();

interface Contact {
  name: string;
  url: string;
  email: string;
}

interface ISwaggerConfig {
  title: string;
  description: string;
  version: string;
  tags: string[];
  contact: Contact;
}

export const SwaggerConfig: ISwaggerConfig = {
  title: configService.name,
  description: 'kraken-test-case',
  version: configService.version,
  tags: [],
  contact: {
    name: '',
    url: configService.server.host,
    email: 'seneralkan77@gmail.com',
  },
};
