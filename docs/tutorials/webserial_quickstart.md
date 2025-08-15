# Tutorial: WebSerial Quickstart (Browser)

Add `drivers/web/webserial.js` to your web app:

```js
import { connectNDJSON } from '../drivers/web/webserial.js';
const io = await connectNDJSON();
await io.send({t:'ping'});
for await (const line of io.lines()) console.log('device:', line);
```

Test in a Chromium‑based browser. Ensure device allows WebSerial access.
