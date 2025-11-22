import { base64 } from '../index.js';

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
    const decoded = base64.decode(data.encoded, 'utf-8');
    logger.info({ decoded });
    expect(decoded).toEqual(data.string);
  });
});
