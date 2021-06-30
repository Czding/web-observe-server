import cache from '../../cache'

interface messageType {
    type: number,
    data?: any
}

// 心跳包检测，去除超时离线用户
setInterval(() => {
    let date = new Date().getTime()
    cache.WEB_LIST = cache.WEB_LIST.filter(item => date - item.date < 70000)
}, 60000)

export default (message: messageType, uid: any, ws: any) => {

    switch (message.type) {
        case 10000:
            cache.WEB_LIST.forEach(item => {
                if (item.uid === uid) {
                    item.date = new Date().getTime()
                }
            })
            break

        default:

            break
    }
}