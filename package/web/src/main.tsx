import React from 'react'
import ReactDom from 'react-dom'
import App from './pages/App'
import 'antd/dist/antd.css'
import './service/websocket'

ReactDom.render(
    <App />, document.getElementById('root')
)
