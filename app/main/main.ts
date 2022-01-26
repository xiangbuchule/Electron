import './ipcMain';
import {BrowserWindow, app, session} from 'electron';
import indexWindow from './windows/index';
import {join} from 'path';

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then((): void => {
    // 创建窗口
    let mainWindow: Electron.BrowserWindow | null | undefined = indexWindow();

    // 加载扩展插件
    Development: {
        // 插件文件夹名
        const developerToolsName = 'React Developer Tools';
        // 插件版本
        const developerToolsVersion = '4.22.0_0';
        // 加载chrome插件
        session.defaultSession
            .loadExtension(
                join(__dirname, `../../extensions/${developerToolsName}/${developerToolsVersion}`),
            )
            .then((): void => {
                console.log(`${developerToolsName} Loaded Successful`);
            })
            .catch((): void => {
                console.log(`${developerToolsName} Loaded Failed`);
            });
    }

    // 当 mainWindow 被关闭，这个事件会被触发。
    mainWindow.on('closed', (): void => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null;
    });

    app.on('activate', (): void => {
        // 在macOS上，当单击dock图标并且没有其他窗口打开时，
        // 通常在应用程序中重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) {
            mainWindow = indexWindow();
        }
    });
});

// 当全部窗口关闭时退出。
app.on('window-all-closed', (): void => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    win32: {
        app.quit();
    }
    linux: {
        app.quit();
    }
});

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
