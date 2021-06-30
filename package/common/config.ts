import { uuid } from './lib'

export const App = {
  // websocket连接url
  CLIENT_SOCKET_URL: 'ws://127.0.0.1:7800/im-ws/client',
  WEB_SOCKET_URL: 'ws://127.0.0.1:7800/im-ws/web',
  clientWs: null,
  webWs: null,
  clientSend: null,
  webSend: null,
  CLIENT_UUID: uuid(),
  WEB_UUID: uuid()
}