

// 重写监听console
let n_console = window.console

console = {
    ...n_console,
    log: (...data: any) => {
        n_console.log(...data)
        $App.clientSend({
            type: '10001',
            message: {
                _type: 'log',
                data
            }
        })
    },
    warn: (...data: any) => {
        n_console.warn(...data)
        $App.clientSend({
            type: '10001',
            message: {
                _type: 'warn',
                data
            }
        })
    },
    error: (...data: any) => {
        n_console.error(...data)
        $App.clientSend({
            type: '10001',
            message: {
                _type: 'error',
                data
            }
        })
    },
    info: (...data: any) => {
        n_console.log(...data)
        $App.clientSend({
            type: '10001',
            message: {
                _type: 'info',
                data
            }
        })
    },
}