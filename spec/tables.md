# Factory Paper Size Standard — Size Classes (v0.1)

| Class     | Footprint (L×W×H) | Part Envelope | Tolerance Target | Material Cartridge Interface | Energy Port               | Data Port & Protocol         |
|-----------|-------------------|---------------|------------------|------------------------------|---------------------------|------------------------------|
| **Nano**  | 0.3×0.3×0.3 m     | ≤ A8 (52×74 mm) | <100 nm          | Wafer trays / micro-powder   | 48V DC / USB-PD           | GigE Vision, OPC-UA nano     |
| **Micro** | 1×1×1 m           | ≤ A5 (148×210 mm) | ±2 µm          | Pellets, reels, resin pods   | 48V DC                    | OPC-UA micro profile         |
| **Human** | 6×2.4×2.6 m (20ft container) | ≤ A1 (594×841 mm) | ±50 µm | ISO cartridge standard (granules, sheet feed, wire spools) | 400V 3-phase AC + 48V DC bus | OPC-UA full + REST API       |
| **Macro** | 20×20×10 m        | ≤ A0×8 (3.36×4.76 m) | ±200 µm      | Bulk hopper/tanker feeds     | 400V+ AC + HV DC bus      | OPC-UA macro profile         |

## Station Profiles (v0.1)

Each station advertises:
- `envelope_mm` (X,Y,Z)
- `accuracy_um`, `repeatability_um`
- `processes` (e.g., fdm, cnc-mill-3axis, pickplace, reflow, scan-3d, torque, vision-apriltag)
- `energy_profile` (dc48v, ac120v, ac240v, ac3p-400v)
- `materials_supported` (e.g., PLA, PETG, PA-GF, Al-6061)
- `throughput_hint` (units/hr)

Minimum required profiles (Human‑scale):
- **Printer‑A1:** FDM pellet/filament, 300×300×300, ±100 µm
- **CNC‑A1:** 400×400×60, ±50 µm, Al‑6061, plastics
- **Arm‑A1:** 5 kg payload, 800 mm reach, repeatability ≤ 0.2 mm
- **QA‑Scan‑A1:** structured‑light ≤ 0.35 mm deviation
- **Torque‑A1:** 0.5–4 N·m with torque‑angle logging

## File Types
- **Job Packet:** `.fpj` (JSON; see schema)
- **QA Traveler:** `.fqt` (JSON; see schema)
- **Materials Passport:** `.fpm` (JSON; see schema)
