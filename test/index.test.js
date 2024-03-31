const { base64 } = require('..');

const logger = console;
const data = {
  string: '@jobscale/base64\n@jobscale/base64',
  encoded: 'QGpvYnNjYWxlL2Jhc2U2NApAam9ic2NhbGUvYmFzZTY0',
};

describe('test base64', () => {
  it('encoded toEqual prompt', async () => {
    const encoded = base64.encode(data.string);
    logger.info({ encoded });
    expect(encoded).toEqual(data.encoded);
  });

  it('decoded toEqual prompt', async () => {
    const decoded = base64.decode(data.encoded);
    logger.info({ decoded });
    expect(decoded).toEqual(data.string);
  });
});
