import './App.css';
import React from 'react';
import logo from './logo.svg';

let ELECTRON: electron | null | undefined;
Electron: {
    ELECTRON = window.electron;
}

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    // 组件挂载函数
    componentDidMount() {
        Electron: {
            if (typeof ELECTRON !== 'undefined' && null !== ELECTRON) {
                debugger;
                ELECTRON.ipcRenderer.indexIPC.login(123, 'qwe!@#').then((token: string) => {
                    console.log(token);
                });
            }
        }
    }
    // 渲染函数
    render() {
        let electronInfo = null;
        Electron: {
            if (typeof ELECTRON !== 'undefined' && null !== ELECTRON) {
                electronInfo = (
                    <h4>
                        We are using Node.js {ELECTRON.nodeVersion}, Chromium{' '}
                        {ELECTRON.chromeVersion}, and Electron {ELECTRON.electronVersion}.
                    </h4>
                );
            }
        }
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                    {electronInfo}
                </header>
            </div>
        );
    }
}
