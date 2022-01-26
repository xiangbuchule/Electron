import {BrowserWindow} from 'electron';
import {join} from 'path';

export default (): Electron.BrowserWindow => {
    // 是否直接显示窗口
    let isShowWindow: boolean;
    Development: {
        isShowWindow = true;
    }
    Production: {
        isShowWindow = false;
    }
    // 创建浏览器窗口。
    const thisWindow: Electron.BrowserWindow = new BrowserWindow({
        // 是否直接显示窗口
        show: isShowWindow,
        // 窗口是否居中
        center: true,
        // 宽
        width: 1600,
        // 高
        height: 900,
        /* IFTRUE_Production */
        // 是否显示边框
        frame: false,
        /* FITRUE_Production */
        // web环境
        webPreferences: {
            // 预加载脚本
            preload: join(__dirname, './preload.js'),
            // 预加载脚本将运行在一个“被隔离的环境”中
            contextIsolation: true,
        },
    });

    // 下面两种方式实现条件编译

    // 然后根据环境判断加载本地的index.html文件还是远程url
    Development: {
        const url = 'http://localhost:8010';
        thisWindow
            .loadURL(url)
            .then((): void => {
                console.log(`page ${url} load success!`);
            })
            .catch((err: Error): void => {
                console.log(err);
                console.log(`page ${url} load fail!`);
            });
        /**
         * 打开开发者工具，
         * 在启动时打开开发者工具,
         * window的show属性设置为false，
         * 不直接显示窗口时(show: false)
         * 并且页面的js包含debugger代码时
         * 具有几率导致eletron不显示界面
         */
        thisWindow.webContents.openDevTools();
    }
    // 然后根据环境判断加载本地的index.html文件还是远程url
    Production: {
        const filePath = join(__dirname, '../react/index.html');
        thisWindow.loadFile(filePath);
        // 当页面完全加载完再显示，防止页面闪烁
        thisWindow.once('ready-to-show', (): void => {
            thisWindow.show();
        });
    }

    return thisWindow;
};
