# Factory Paper Size Standard (FPSS) — v1.2

Open, modular standards for building **micro‑tools → tools → factories** across scales — with sustainable energy and ethical materials.

**What is FPSS?**  
A physical + software toolkit that uses paper‑style sizes (A5→A1) and **reserved interface bands** so small modules can nest inside larger ones. Devices speak a tiny JSON protocol so they’re plug‑and‑play.

**👉 Try the UI template (local):** open **[`ui/index.html`](ui/index.html)** in your browser.  
(Or run `python3 -m http.server 8000` and visit `http://localhost:8000/ui/`.)

---

## Quickstart (no hardware)

1. Open **[`ui/index.html`](ui/index.html)**  
2. Click **Import .FPJ** and select **`samples/hello_world.fpj`**  
3. Press **RUN** or hit **Space** (center of the 3×3 pad also starts/stops)  
4. Watch the progress bar and **Logs** panel

> Hardware later? Start the optional Bridge and click **Discover Devices** → **Open Serial (auto)**.

```bash
python3 -m pip install pyserial websockets
python bridge/serial_ws_bridge.py --baud 115200
```

---

## Visual Standards

### 1) Nested sizes (proportional cascade)
<p align="center">
  <img src="assets/fpss_nested_staggered_v4.jpeg" alt="Nested sizes (staggered A-sizes)" style="max-width:100%;height:auto;">
</p>

### 2) Isometric — module‑within‑module
<p align="center">
  <img src="assets/fpss_isometric_module_padded2.png" alt="Isometric module within module" style="max-width:100%;height:auto;">
</p>

### 3) Interface bands (service margins)
<p align="center">
  <img src="assets/fpss_interface_bands_v1.jpeg" alt="Interface bands" style="max-width:100%;height:auto;">
</p>

---

## Hello World (read‑me version)

- **Goal:** complete a job with no hardware.  
- **Steps:** Import `samples/hello_world.fpj` → **RUN** → watch Logs.  
- **What you learn:** FPJ format, run/stop, logs, keyboard shortcuts.

```json
{
  "name": "Hello World",
  "steps": [
    { "target": "station/Printer-A1", "command": "start", "params": {"speed": "normal"} },
    { "target": "station/Arm-A1",     "command": "home",  "params": {} },
    { "target": "station/Printer-A1", "command": "stop",  "params": {} }
  ]
}
```

---

## Repo map

- `ui/` — **UI template** (student‑friendly; 3×3 pad visible; Pro palette via ⌘K/Ctrl+K)  
- `assets/` — diagrams used in README/spec (JPEG/PNG as referenced above)  
- `spec/v1/` — Docking v1, Geometry 3D, Packing Guide, UI Controls (CPS‑1)  
- `docs/tutorials/` — Hello World, Weekend Micro‑Factory, Keepout, Starter Kit, GRBL Adapter  
- `samples/` — example FPJ jobs (e.g., `hello_world.fpj`)

© 2025 FPSS contributors.
