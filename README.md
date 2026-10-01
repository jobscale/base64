# @jobscale/base64

## Installation

```
npm i @jobscale/base64
```

## Examples

### base64

ES Module

```javascript
import { createLogger } from '@jobscale/create-logger';
import { base64 } from '@jobscale/base64';

const logger = createLogger({ level: 'info' });

const encoded = base64.encode('@jobscale/base64');
const decoded = base64.decode(encoded);
logger.info({
  timestamp: Date.now(),
  encoded,
  decoded,
  decodedText: Buffer.from(decoded).toString('utf-8'),
});
```

CommonJs

```javascript
const main = async () => {
  const { createLogger } = await import('@jobscale/create-logger');
  const { base64 } = await import('@jobscale/base64');

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
```

## Jest test
```
npm test
```
