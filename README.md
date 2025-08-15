# Factory Paper Size Standard (FPSS) — v1.3

Open, modular standards for building **micro‑tools → tools → factories** across scales — with sustainable energy and ethical materials.

**What is FPSS?**  
A physical + software toolkit that uses paper‑style sizes (A5→A1) and **reserved interface bands** so small modules can nest inside larger ones. Devices speak a tiny JSON protocol so they’re plug‑and‑play.

**Try the UI template:** open [`ui/index.html`](ui/index.html) locally.  
**Hello World:** import `samples/hello_world.fpj` in the UI and press **RUN**.

---

## Quickstart (no hardware)

1. Open **[`ui/index.html`](ui/index.html)**  
2. Import **`samples/hello_world.fpj`**  
3. Press **RUN** (Space toggles run/stop)  
4. Watch the progress bar and **Logs**

> Hardware later? Start the bridge and click **Discover Devices** in the UI.

```bash
python3 -m pip install pyserial websockets
python bridge/serial_ws_bridge.py --baud 115200
```

---

## Visual Standards

### 1) Nested sizes (proportional cascade)
<p align="center">
  <img src="assets/viz_nested.jpeg" alt="Nested sizes (A‑series cascade)" style="max-width:100%;height:auto;">
</p>
<sub>Smaller modules (A5/A6) fit cleanly within larger shells (A3/A1), preserving a simple packing rhythm.</sub>

### 2) Isometric — module‑within‑module
<p align="center">
  <img src="assets/viz_isometric.jpeg" alt="Isometric module within module" style="max-width:100%;height:auto;">
</p>
<sub>Micro module (A5) docked inside a Human module (A1), showing clear containment and callouts.</sub>

### 3) Interface bands (service margins)
<p align="center">
  <img src="assets/viz_interface_bands.jpeg" alt="Interface bands" style="max-width:100%;height:auto;">
</p>
<sub>Reserved margins for power, data, and mechanical locks. Leaves the working zone clean for tooling.</sub>

---

## Project map

- [`/ui/`](ui/) — UI template (student‑friendly; 3×3 control pad visible; Pro palette via ⌘K/Ctrl+K)  
- [`/assets/`](assets/) — repository diagrams and figures (normalized for GitHub)  
- [`/spec/v1/`](spec/v1/) — Docking v1, Geometry 3D, Packing Guide, UI Controls (CPS‑1)  
- [`/docs/tutorials/`](docs/tutorials/) — Hello World, Weekend Micro‑Factory, Keepout, Starter Kit, GRBL Adapter  
- [`/samples/`](samples/) — example FPJ jobs (e.g., `hello_world.fpj`)  
- [`/bridge/`](bridge/) — optional WebSocket⇄Serial bridge (for hardware runs)

© 2025 FPSS contributors.
