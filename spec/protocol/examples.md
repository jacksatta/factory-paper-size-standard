# Example Transcript

```
< {"t":"hello","fp":"1.0","station":"Printer-A1"}
> {"t":"ping"}
< {"t":"pong"}
> {"t":"step","id":1,"op":"home","axes":"XYZ"}
< {"t":"ack","id":1}
< {"t":"log","id":1,"msg":"Homing..."}
< {"t":"done","id":1}
> {"t":"step","id":2,"op":"print","coupon":"A5_test_v1"}
< {"t":"ack","id":2}
< {"t":"log","id":2,"msg":"Heating"}
< {"t":"done","id":2}
```
