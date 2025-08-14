# Quick Start (FPSS v0.1)

**Goal:** Understand FPSS, run a simulation, and prepare a first build.

## 1) What is FPSS?
A standard so factories of different sizes (Nano → Micro → Human → Macro) can:
- Share a **job packet** format (`.fpj`)
- Use **materials passports** for sustainability
- Interoperate using **station profiles** (printer, CNC, robot arm, QA, etc.)

## 2) TL;DR steps
1. Read the **Manifesto** for the “why”.
2. Skim **/spec/tables.md** for sizes & interfaces.
3. Run a **simulation** (no hardware) to see a parent cell build a part.
4. If you want to build: pick **Human‑scale** and review the **assembly guide**.

## 3) Simulate first (no hardware required)
```bash
python robots/tools/sim_job_runner.py --demo demos/demo_part.fpj
```
This parses an `.fpj` job, schedules “stations,” and emits a mock QA traveler (`.fqt`).

## 4) Build tiers
- **Tier A (~USD 0):** Simulation only. Learn the job format and station profiles.
- **Tier B (USD 1–3k):** Desktop 3D printer + small router. Make jigs/fixtures, plastics, and simple plates.
- **Tier C (USD 8–15k):** Add desktop CNC and a low-cost 6‑axis arm or XY gantry. You can assemble a **SCARA‑v1** child.
- **Tier D (USD 25–60k):** Serious Parent Cell: conveyor, screwdriving spindle, scanner, torque pad, better arm.

## 5) Safety first
See `/getting_started/safety.md` before wiring or operating machines.

## 6) Next steps
- Try **/robots/stations/parent_cell_quick_start.md**
- Explore **/reference_designs/human_scale_module/**
- Join Discussions to share your build or ask questions.
