# @jobscale/base64

## Installation

```
npm i @jobscale/base64
```

## Examples

### base64

```javascript
const { logger } = require('@jobscale/logger');
const { base64 } = require('@jobscale/base64');

const encoded = base64.encode('@jobscale/base64');
const decoded = base64.decoded(encoded);
logger.info({
  timestamp: Date.now(),
  encoded,
  decoded,
});
```

## Jest test
```
npm test
```
