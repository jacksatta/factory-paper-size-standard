# Tutorial: Connect Real Hardware (Serial)

1. Install Python and `pip install pyserial`.
2. Plug in your device; find the port (e.g., `/dev/ttyUSB0` or `COM3`).
3. In a terminal: `python drivers/serial/fpss_serial.py --port <PORT>`.
4. Modify handlers in `fpss_serial.py` to call into your firmware (e.g., send G‑code, move axes).

**Frame**: each line is a JSON object (`{"t":"step",...}\n`). Keep messages short and stateless.
