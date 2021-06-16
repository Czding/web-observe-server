
import app from '../config'

const ws = new WebSocket(app.SOCKET_URL)

let HEART_TIMER: any = null

const heartbeat = () => {
  HEART_TIMER = setTimeout(() => {
    const message = {
      type: 10000
    }
    ws.send(JSON.stringify(message))
    heartbeat()
  }, 5000)
}

ws.onopen = () => { 
  console.log("Connection open ...")
  heartbeat()
  
};

ws.onmessage = (msg) => {
  console.log( "Received Message: ", msg)
  
};

ws.onclose = () => {
  console.log("Connection closed.");
};