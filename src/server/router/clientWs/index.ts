import express from 'express'
import expressWs from 'express-ws'
import handleRecive from './handleRecive'

const router = express.Router()
expressWs(express())

router.ws('/client', (ws) => {
  ws.on('message', (msg:string) => {
      let data = JSON.parse(msg)
      handleRecive(data, ws)
  })
  ws.on('close', (msg) => {
      console.log('close')
  })
})

export default router