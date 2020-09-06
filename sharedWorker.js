
let ports = []

onconnect = function (e) {

  const port = e.ports[0];

  ports.push(port)

  port.onmessage = function (event) {

    console.log("Recieved Message: ", event.data)
    const action = event.data.action

    switch (action) {
      case "PING": {
        this.postMessage({ action: "PONG" })
      }

    }
  }
}