# Factory Paper Size Standard (FPSS)

Open, modular standards for building **micro-tools -> tools -> factories** across scales — with sustainable energy, ethical materials, and practical interfaces so small modules can nest into larger ones.

---

## Visual Standards

These visuals communicate the physical interoperability ideas behind FPSS.
(Place the image files in `/assets` at the repo root.)

### 1) Nested Sizes (proportional cascade)
`/assets/fpss_nested_staggered_v4.jpeg`  
Shows boxes-within-boxes using A-series-like proportions so smaller modules can nest within larger frames with room for service corridors.

### 2) Isometric: Module Within Module
`/assets/fpss_isometric_module_within_module.jpeg`  
Exploded/isometric view to explain spatial hierarchy and docking/locking points.

### 3) Margins & Interface Bands ("fuzzy margins")
`/assets/fpss_interface_bands_v1.jpeg`  
Defines the tolerance bands reserved around each module for mechanical locks, cabling, pneumatics, cooling, safe robot clearances, and maintenance. Think of it as the "do-not-occupy" halo that lets multiple mini-factories dock inside a larger frame without interference.

---

## FPSS UI v1.0 — Interactive Demo Interface

A browser-based control panel for creating and managing FPSS jobs, running simulations, tracking stations/materials, and QA.

**Features**  
- Tabs + Hamburger Nav: Dashboard, Jobs, Stations, Materials, QA.  
- Jobs: Create, Import `.fpj`/JSON, Edit (modal), Duplicate, Delete, Search filter.  
- Simulation: Run/Stop progress targeting the first job; job status updates (Running -> Complete/Stopped).  
- Stations: Start/Stop per station.  
- Materials: Add, increment/decrement, delete (persists via `localStorage`).  
- QA: Checklist with JSON export (persists).  

**Get Started**  
1. Copy the `/ui` folder to the repo root.  
2. Open `ui/index.html` in your browser (works from `file://` or via a local server).  
3. Optional: Import a `.fpj` file (simple JSON with fields like `name`, `energy`, `material`, `qa`).  

**Screenshot**  
`/ui/screenshot.png`  
![FPSS UI Screenshot](ui/screenshot.png)

**Notes**  
- All code is inline to avoid script-loading issues.  
- Data persists locally in the browser.  
- This UI is a demo; wire it to your actual hardware/robot endpoints as they come online.

---

## License & Governance

- Code and docs: Apache-2.0 (suggested; update as desired).  
- Hardware reference designs: CERN OHL-S or CERN OHL-W recommended.  
- Keep currency references explicit (use USD).  

---

## Contributing

1. Open an issue for proposals (new sizes, modules, or interfaces).  
2. Submit a PR with: spec changes, diagrams, and UI improvements.  
3. For design artifacts (CAD, schematics), include a README and neutral format export.
