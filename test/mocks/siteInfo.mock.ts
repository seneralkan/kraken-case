export const siteInfoCreateResponseMock = {
  id: 1,
  siteId: 'kingfisher',
  name: 'Kingfisher',
  createdAt: new Date(),
};

export const siteInfoCreateMock = {
  siteId: 'kingfisher',
  name: 'Kingfisher',
};

export const siteInfoFindOneResponseMock = {
  id: 1,
  siteId: 'kingfisher',
  name: 'Kingfisher',
  createdAt: new Date(),
  devices: [
    {
      id: 0,
      deviceId: '002b28fc-283c-47ec-9af2-ea287336dc1b',
      begin: '2021-07-26T17:09:31.036Z',
      end: '2021-08-29T00:37:42.253Z',
      createdAt: new Date(),
    },
    {
      id: 1,
      deviceId: '002b28fc-283c-47ec-9af2-ea287336dc1b',
      begin: '2022-05-23T12:21:27.377Z',
      end: '2022-11-13T02:16:38.905Z',
      createdAt: new Date(),
    },
  ],
};
