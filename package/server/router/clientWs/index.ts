import express from 'express'
import expressWs from 'express-ws'
import handleRecive from './handleRecive'
import cache from '../../cache'

const router = express.Router()
expressWs(express())

router.ws('/client', (ws, req) => {

    if (!req.query.origin || !req.query.uid) {

        ws.close()

    } else {

        if (!cache.CLIENT_LIST.some(item => item.uid === req.query.uid)) {
            cache.CLIENT_LIST.push({
                origin: req.query.origin,
                uid: req.query.uid,
                date: new Date().getTime()
            })
        }

        cache.clientWs = ws
        
    }

    ws.on('message', (msg: string) => {
        let data = JSON.parse(msg)
        handleRecive(data, req.query.uid, ws)
    })

    ws.on('close', (msg) => {
        
    })

})

export default router