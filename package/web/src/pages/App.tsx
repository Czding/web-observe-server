import React from 'react'
import { Menu } from 'antd'
import './App.scss'

const { SubMenu } = Menu

class App extends React.Component {

    state = {
        current: '1'
    }

    handleClick = e => {
        this.setState({ current: e.key })
    }

    render() {
        const { current } = this.state
        return (
            <div className="home">
                <div>

                </div>
                <div>
                    <div className="menu">
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 240 }}
                            selectedKeys={[current]}
                            mode="inline"
                        >
                            <Menu.Item key="1">控制台</Menu.Item>
                            <Menu.Item key="2">websocket</Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}

export default App