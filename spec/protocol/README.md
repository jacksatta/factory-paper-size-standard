# FPSS Host↔Station Protocol (v1.0)

Transport‑agnostic **NDJSON** frames (one JSON per line).

## Messages
- `hello` — `{"t":"hello","fp":"1.0","station":"Printer-A1"}`
- `ping`/`pong`
- `step` — `{"t":"step","id":1,"op":"print","coupon":"A5_test_v1"}`
- `ack`/`nack` — acknowledge or reject
- `done` — step finished
- `status` — `{"t":"status","state":"idle|busy|fault"}`
- `log` — human line (for UIs)

See `state_machine.md` and `examples.md`.
