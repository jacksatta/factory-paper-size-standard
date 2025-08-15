# Factory Paper Size Standard (FPSS)

Open, modular standards for building **micro-tools -> tools -> factories** across scales — with sustainable energy and ethical materials.

## Visual Standards

### 1) Nested Sizes (proportional cascade)
![Nested Sizes Diagram](assets/fpss_nested_staggered_v4.jpeg)

### 2) Isometric: Module Within Module
![Isometric nested module](assets/fpss_isometric_module_within_module.jpeg)

### 3) Margins & Interface Bands
![Interface bands / fuzzy margins](assets/fpss_interface_bands_v1.jpeg)

## FPSS UI v1.1 — Interactive Demo

![FPSS UI Screenshot](ui/screenshot.png)

- Jobs: Create, Import `.fpj`, Edit, Duplicate, Delete, Filter
- Simulation: Run/Stop + progress; updates first job status
- Stations, Materials, QA (localStorage persisted)
- **Adapters:** Sim (default), Serial (Web Serial), WebSocket

### Run
- Sim: open `ui/index.html`
- Serial: `python3 -m http.server` then open `http://localhost:8000/ui/`
- WebSocket: set URL in Connection modal

## Hardware Adapter Layer
Small API (see `docs/adapter_dev.md`): `connect`, `sendCommand`, `getStatus`, `disconnect`. Envelope: `{ target, command, params }`.

## Schema & Samples
- `schema/fpj.schema.json`
- `samples/example.fpj`

## License & Contributing
- Code/docs: Apache-2.0 (suggested)
- Hardware: CERN OHL-S/W recommended
- PRs welcome: specs, diagrams, UI, adapters
