# Device State Machine (reference)

```
IDLE → BUSY (on step) → IDLE (on done)
  ↘ FAULT (on error)
FAULT → IDLE (on clear)
```
All states must continue to accept `ping`. `hello` may be resent after reconnect.
