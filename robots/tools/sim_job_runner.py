#!/usr/bin/env python3
import json, argparse, time, pathlib

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--demo", required=True, help="Path to .fpj job packet")
    args = ap.parse_args()

    p = pathlib.Path(args.demo)
    job = json.loads(p.read_text())
    print(f"[SIM] Loaded job UUID: {job.get('uuid')} target: {job.get('target_class')}")

    for step in job.get("process_plan", []):
        station = step.get("station")
        op = step.get("op")
        print(f"[SIM] Executing {station}:{op} ...")
        time.sleep(0.4)

    fqt = {
        "serial":"SIM-0001",
        "job_uuid":job.get("uuid"),
        "station_logs":[{"station":s.get("station"),"metrics":{}} for s in job.get("process_plan",[])],
        "calibration":{},
        "results":{"pass":True,"metrics":{"simulated":True}}
    }
    out = p.with_suffix(".fqt")
    out.write_text(json.dumps(fqt, indent=2))
    print(f"[SIM] QA traveler written to {out}")

if __name__ == "__main__":
    main()
