const main = async () => {
  const { createLogger } = await import('@jobscale/create-logger');
  const { base64 } = await import('./index.js');

  const logger = createLogger({ level: 'info' });

  const encoded = base64.encode('@jobscale/base64');
  const decoded = base64.decode(encoded);
  logger.info({
    timestamp: Date.now(),
    encoded,
    decoded,
    decodedText: Buffer.from(decoded).toString('utf-8'),
  });
};

main();
