# Factory Paper Size Standard (FPSS) — v0.1

**An open manufacturing standard for interoperable, scalable, and sustainable production — with robots that can build other robots.**

FPSS defines how manufacturing modules — from nano-scale to warehouse-scale — can connect, share jobs, and grow by building the next size up.  
Just like paper sizes nest into each other (A5 → A4 → A3), FPSS modules nest in *capability* and *output*, using fixed scaling ratios, standard material cartridges, and a shared digital job language.

---

## Why
- **Resilience:** Make what you need locally, without fragile supply chains.
- **Sustainability:** Prefer abundant, recyclable materials.
- **Scalability:** Microfactories can feed macrofactories without redesign.
- **Innovation speed:** AI + standard hardware = faster iteration.
- **Self-expansion:** Human-scale modules can build smaller tools or clone themselves.

---

## Robots That Build Robots
The Factory Paper Size Standard is not just a blueprint for machines — it’s a blueprint for *makers of machines*.  
Our aim is for FPSS modules to fabricate and assemble other FPSS modules:

- **Parent Cells** (Human-scale) build **Child Cells** (Micro-scale or other Human-scale).  
- **Children** link into **Macro Cells** for large-scale builds.  
- Over time, the network becomes self-expanding.

---

## How to Start
1. Pick a size class (nano, micro, human, macro).
2. Download CAD & BOM from `/reference_designs`.
3. Assemble your module from off-the-shelf parts.
4. Run your first job packet (`.fpj`) and produce a part.
5. Share your build and join the network.

---

## Quick Links
- [Manifesto](manifesto/manifesto.md)
- [Size Table](spec/tables.md)
- [Job Packet Schema](spec/job_packet_schema.json)
- [Human-Scale Module Guide](reference_designs/human_scale_module/assembly_guide.md)
- [Parent Cell Starter Pack](robots/README.md)

**License**  
- Standard: Creative Commons BY-SA 4.0  
- Reference Designs: CERN Open Hardware License  
- Software: Apache-2.0
