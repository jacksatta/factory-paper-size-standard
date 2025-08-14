# Human-Scale Module (FPSS-A1) — Assembly Guide (v0.1)

**Purpose:** A 20 ft container (or small room) outfitted with stations to fabricate, assemble, and QA Micro/Human parts.

## Stations (minimum viable)
- **Printer-A1:** 300×300×300 FDM (0.6 mm nozzle) — pellets or filament
- **CNC-A1:** Desktop 3-axis, 400×400×60 mm, Al-6061 + plastics
- **Arm-A1:** 6-axis arm (≥5 kg) or XY gantry with Z post
- **Reflow/PnP (optional):** Desktop pick-and-place + reflow oven
- **QA-Scan-A1:** Structured-light scanner
- **Torque-A1:** 0.5–4 N·m torque/angle driver
- **Conveyor/Kitting:** Bins + scale + label printer

## Frame & Layout
- Mount stations to a Unistrut/8020 frame along container walls.
- Keep a 1 m service aisle; position arm with reach to kitting and S40 assembly table.

## Power & Control
- AC: 120/240 V as required; DC: 48 V bus for low-voltage tools.
- Network: wired Ethernet; stations expose OPC‑UA with FPSS profile.
- E‑stops daisy-chained; light curtain guarding arm workspace.

## Bring-up
1. Install stations and wire power/network.
2. Run **station self-tests** (vendor tools) and note capability in a `stations.json`.
3. Calibrate Printer‑A1 (bed mesh) and CNC‑A1 (tramming, tool length).
4. Verify Arm‑A1 repeatability with AprilTags; teach kitting poses.

## First article job
- Use `/robots/process/wi_scara_v1.md` with the demo job packet.
- Expect to print: links/brackets; CNC: plates; Arm: assembly; QA: scan.

## Maintenance (daily)
- Printer nozzle clean; CNC chip clear; torque tool calibration check weekly.
