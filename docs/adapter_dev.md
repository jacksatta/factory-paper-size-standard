# FPSS Adapter Development Guide

API:

```js
export default {
  connect: async (config) => {},
  sendCommand: async (target, command, params) => {},
  getStatus: async () => {},
  disconnect: async () => {}
}
```

Envelope:
```json
{"target":"station/Printer-A1","command":"start","params":{"speed":"normal"}}
```

Notes:
- Web Serial requires HTTPS or localhost
- Queue commands with ACKs; plan e-stop
