
let ports = []

onconnect = function (e) {

  const port = e.ports[0];

  ports.push(port)

  port.onmessage = function (event) {

    console.log("Recieved Message: ", event.data)

    if (event.data === "HI") {
      this.postMessage("HI From Worker")
      return
    }

    if (event.data === "HELLO") {
      ports.forEach(portInst => portInst.postMessage("HELLO From Worker"))
      return
    }

    if (event.data === "BONJOUR") {
      ports.forEach((portInst, index) => {
        if (index % 2 === 0) { return }
        portInst.postMessage("BONJOUR From Worker")
      })
      return
    }

  }
}

function broadcast(message) {
  ports.forEach(portInst => portInst.postMessage(message))
}



