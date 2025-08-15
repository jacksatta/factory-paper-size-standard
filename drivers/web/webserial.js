export async function connectNDJSON(){
  if (!('serial' in navigator)) throw new Error('WebSerial not supported');
  const port = await navigator.serial.requestPort();
  await port.open({ baudRate: 115200 });
  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();
  const reader = port.readable.getReader();
  const writer = port.writable.getWriter();

  async function send(obj){
    const line = JSON.stringify(obj) + "\n";
    await writer.write(textEncoder.encode(line));
  }
  async function *lines(){
    let buf = "";
    while (true){
      const { value, done } = await reader.read();
      if (done) break;
      buf += textDecoder.decode(value, {stream:true});
      let idx;
      while ((idx = buf.indexOf("\n")) >= 0){
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx+1);
        if (line) yield line;
      }
    }
  }
  return { port, send, lines };
}
