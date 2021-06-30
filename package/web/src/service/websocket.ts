

let ws = new WebSocket(`${$App.WEB_SOCKET_URL}?origin=${window.origin}&uid=${$App.WEB_UUID}`)

$App.client_ws = ws

let HEART_TIMER: any = null

const heartbeat = () => {
  HEART_TIMER = setTimeout(() => {
    const message = {
      type: 10000
    }
    ws.send(JSON.stringify(message))
    heartbeat()
  }, 60 * 1000)
}

ws.onopen = () => { 
  heartbeat()
  
}

ws.onmessage = (msg) => {

  
}

ws.onclose = () => {
  
}

export {}