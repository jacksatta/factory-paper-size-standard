# Calibration — SCARA‑v1

1) Home joints with low torque limits.  
2) AprilTag sequence: capture poses at 0°, 45°, 90° for J1/J2; solve DH parameters.  
3) Torque pad test: apply 2 kg @ 0.5 m; compute torque constants; store in EEPROM.  
4) Backlash map: sweep ±2°; fit deadband; store compensation table.  
**Outputs:** `calibration.json` attached to `.fqt`.
