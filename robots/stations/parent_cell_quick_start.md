# Parent Cell Quick Start (Human‑A1)

**Goal:** Build one SCARA‑v1 child robot from FPSS job packets.

## Minimum hardware
- 6‑axis arm (≥5 kg payload) OR XY gantry with Z tool post
- FDM printer (≥300×300×300 mm), 0.6 mm nozzle, pellet or filament
- Desktop CNC (work area ≥ 400×400 mm), toolchanger optional
- Screwdriving spindle with torque/angle control
- Small conveyor (bins + QR tray labels), label printer
- Calibration: torque pad (load cell), AprilTag board, structured‑light scanner
- Power: 48 V DC bus + 120/240 V AC as needed; e‑stop chain

## Software
- FPSS Job Runner (open) + Cell Orchestrator (this repo, WIP)
- Vision stack (AprilTag), scanner driver, torque pad driver
- OPC‑UA server with FPSS extensions

## Steps
1. Clone repo; install requirements when available.
2. Run `orchestrator --demo demos/demo_part.fpj` (placeholder for now).
3. Fabrication: printer → links/covers; CNC → base/motor plates.
4. Kitting: conveyor bins, scale/vision check, print QR.
5. Assembly: arm executes `../process/wi_scara_v1.md`.
6. Calibration: run `../calibration_qa/scara_cal.md`.
7. QA: run `../calibration_qa/scara_qa.md` → emits `.fqt`.
