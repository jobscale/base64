import { createLogger } from '@jobscale/create-logger';
import { base64 } from './index.js';

const logger = createLogger({ level: 'info' });

const encoded = base64.encode('@jobscale/base64');
const decoded = base64.decode(encoded);
logger.info({
  timestamp: Date.now(),
  encoded,
  decoded,
  decodedText: Buffer.from(decoded).toString('utf-8'),
});
