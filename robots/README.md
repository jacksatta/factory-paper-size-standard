# Robots That Build Robots (RTBR)

This directory contains the open reference for a Human‑scale **Parent Cell** that manufactures **Child Robots** using FPSS standards.

**Why:** Hardware execution engine for FPSS. Parent Cells (A1) fabricate, kit, assemble, calibrate, and QA FPSS‑compliant children (A5/Micro or A1/Human). Two or more parents link to act as a Macro cell (A0).

## Contents
- `parametric/` – generators that turn task specs into robot bills of materials + CAD (TBD).
- `process/` – work instructions the Parent Cell can execute.
- `calibration_qa/` – auto calibration scripts + QA traveler schema.
- `kits/` – Actuator Brick specs, harness kits, end‑effector quick‑change.
- `stations/` – minimal Parent Cell layout (printer, CNC, arm, conveyor, QA).

## What the Parent Cell can build first
- **SCARA‑v1** (3 kg, 700 mm reach, ±0.2 mm repeatability)
- **Actuator Brick‑M** housings + link/bracket set
- **Micro‑A5 precision tool**: desktop PCB PnP or micro‑CNC chassis

## FPSS hooks
- Accepts **Job Packets** (`.fpj`) and emits **QA Travelers** (`.fqt`).
- All parts carry **Materials Passports** (`.fpm`) for sustainability tracking.

Start here: `stations/parent_cell_quick_start.md`
