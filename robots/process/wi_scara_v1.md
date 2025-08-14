# Work Instructions — SCARA‑v1 (FPSS‑A1)

**Fasteners:** M4 only. Torque 1.8 N·m (unless noted).  
**Adhesives:** UV‑curing acrylate, 0.3 mm bead where specified.

## Stations
S10: Print Links & Brackets  
S20: CNC Base & Motor Plates  
S30: Kit & Label  
S40: Joint Stack Assembly  
S50: Harness Route & Close  
S60: Calibration  
S70: QA & Pack

## Sequence
- S10.1: Print Link‑Upper‑L600, Link‑Lower‑L400, Bracket‑RH/LH (x2)
- S20.1: CNC BasePlate‑SCARA, MotorPlate‑J1, J2
- S30.1: Weigh kit; vision confirm; print QR tray
- S40.1: Assemble J1 (Actuator Brick‑M + MotorPlate‑J1); torque screws; record values
- S40.2: Assemble J2 (Actuator Brick‑M + MotorPlate‑J2)
- S40.3: Mount links; apply UV adhesive to key faces; UV cure 30 s
- S50.1: Route harness through clips; maintain ≥ 10× cable OD bend radius
- S60.1: AprilTag pose sequence; write joint offsets/torque constants to EEPROM
- S70.1: Motion script (15 min); log current/temps/backlash; print serial label
