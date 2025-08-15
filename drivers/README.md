# FPSS Drivers

Reference transports to talk to FPSS stations.

- **serial/** — newline‑delimited JSON (NDJSON) over USB/COM.
- **web/** — WebSerial helper for in‑browser prototypes (Chromium‑based browsers).

> Transports are thin: they stream JSON frames. All semantics live in the **protocol**.
