

interface websocketData {
  type: number,
  message?: any
}

const ws = new WebSocket(`${$App.CLIENT_SOCKET_URL}?origin=${window.origin}&uid=${$App.CLIENT_UUID}`)

$App.clientWs = ws

let HEART_TIMER: any = null

// websocket发送数据包裹JSON
const clientSend = (data: websocketData) => {
  ws.send(JSON.stringify(data))
}

$App.clientSend = clientSend

// 定时心跳
const heartbeat = () => {
  HEART_TIMER = setTimeout(() => {
    const message = {
      type: 10000
    }
    clientSend(message)
    heartbeat()
  }, 60* 1000)
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

export {}