const { base64 } = require('..');

const logger = console;

describe('test base64', () => {
  it('encoded toEqual prompt', () => {
    const encoded = base64.encode('@jobscale/base64');
    logger.info({ encoded });
    expect(encoded).toEqual('QGpvYnNjYWxlL2Jhc2U2NA==');
  });

  it('decoded toEqual prompt', () => {
    const decoded = base64.decode('QGpvYnNjYWxlL2Jhc2U2NA==');
    logger.info({ decoded });
    expect(decoded).toEqual('@jobscale/base64');
  });
});
