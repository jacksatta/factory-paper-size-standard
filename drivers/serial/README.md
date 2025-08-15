# Serial Transport (NDJSON)

- **Frame:** one JSON object per line; UTF‑8; `\n` terminator.
- **Port settings:** 115200 8N1 (typical), configurable.
- **Handshake:** host expects `{"t":"hello","fp":"1.0","station":"Name"}` from device.

## Example session
```
> {"t":"ping"}
< {"t":"pong"}
> {"t":"step","id":1,"op":"home","axes":"XYZ"}
< {"t":"ack","id":1}
< {"t":"done","id":1}
```

See `fpss_serial.py` for a minimal bridge using `pyserial`.
