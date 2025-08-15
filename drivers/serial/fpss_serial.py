#!/usr/bin/env python3

import argparse, json, sys, time
try:
    import serial  # pip install pyserial
except Exception:
    serial = None

def ndjson_lines(port):
    buf = b""
    while True:
        ch = port.read(1)
        if not ch: 
            yield None; continue
        if ch == b"\n":
            line = buf.decode("utf-8", errors="ignore").strip()
            buf = b""
            if line:
                yield line
        else:
            buf += ch

def main():
    ap = argparse.ArgumentParser(description="FPSS NDJSON serial bridge")
    ap.add_argument("--port", required=True)
    ap.add_argument("--baud", type=int, default=115200)
    args = ap.parse_args()

    if serial is None:
        print("pyserial missing. Run: pip install pyserial", file=sys.stderr)
        sys.exit(1)

    ser = serial.Serial(args.port, args.baud, timeout=1)

    def send(obj):
        ser.write((json.dumps(obj) + "\\n").encode("utf-8"))

    # Say hello on connect
    send({"t":"hello","fp":"1.0"})

    step_handlers = {
        "home": lambda m: time.sleep(0.2),
        "heat": lambda m: time.sleep(0.3),
        "cool": lambda m: time.sleep(0.1),
        "print": lambda m: time.sleep(0.5),
        "scan": lambda m: time.sleep(0.2),
        "move": lambda m: time.sleep(0.1),
        "wait": lambda m: time.sleep(float(m.get("duration_s", 0.1)))
    }

    for line in ndjson_lines(ser):
        if line is None: 
            continue
        try:
            msg = json.loads(line)
        except Exception:
            send({"t":"nack","err":"bad_json"}); continue

        t = msg.get("t")
        if t == "ping":
            send({"t":"pong"}); continue

        if t == "step":
            sid = msg.get("id")
            op = msg.get("op")
            send({"t":"ack","id":sid})
            handler = step_handlers.get(op, lambda m: time.sleep(0.05))
            try:
                handler(msg)
                send({"t":"done","id":sid})
            except Exception as e:
                send({"t":"nack","id":sid,"err":str(e)})
            continue

        send({"t":"nack","err":"unsupported","msg":msg})

if __name__ == "__main__":
    main()
