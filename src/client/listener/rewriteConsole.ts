

// 重写监听console
let n_console = window.console

console = {
    ...n_console,
    log: (...data: any) => {
        n_console.log(...data)
    },
    warn: (...data: any) => {
        n_console.warn(...data)
    },
    error: (...data: any) => {
        n_console.error(...data)
    }
}