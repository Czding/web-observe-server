
// 重写ajax
let n_xhr = XMLHttpRequest
XMLHttpRequest = null

XMLHttpRequest = new Proxy(n_xhr, {
    construct: () => {
        const n = new n_xhr()
        const _open = n.open
        const _send = n.send

        n.open = (...params: [url: string, methods: string]) => {
            return _open(...params)
        }

        n.send = (body) => {
            return _send(body)
        }

        n.addEventListener('readystatechange', () => {

        })

        return n
    }
})

// 重写fetch
let n_fetch = window.fetch
window.fetch = null

window.fetch = (...arg) => {
    return new Promise(async (resolve, reject) => {
        console.log(...arg)
        try {
            const response = await n_fetch(...arg)
            console.log(response)
            resolve(response)
        } catch (e) {
            reject(e)
        }
        
    })
}

// 重写websocket
// let n_websocket = window.WebSocket
// window.WebSocket = null

// window.WebSocket = new Proxy(n_websocket, {
//     construct: (target, args: any) => {
//         let w = new n_websocket(args)
//         const w_send = w.send
//         w.send = (msg) => {
//             w_send(msg)
//         }
//         w.addEventListener('message', () => {

//         })
//         w.addEventListener('close', () => {

//         })
//         w.addEventListener('error', () => {

//         })
//     }
// })





