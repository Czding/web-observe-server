
interface messageType {
  type: number,
  data: any
}

let delyTimer = null

export default (message: messageType, ws:any) => {
  switch (message.type) {
    case 10000:
      clearTimeout(delyTimer)
      delyTimer = setTimeout(() => {
        ws.close()
      }, 10000)
      break
    default:
      break
  }
}