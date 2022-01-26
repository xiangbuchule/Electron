import ipcChannels from '../common/ipcChannels';
import {ipcMain} from 'electron';

ipcMain.handle(
    ipcChannels.login,
    (event: Electron.IpcMainInvokeEvent, userId: number, password: string): string => {
        console.log(`login success, userId ${userId}, password ${password}!`);
        return 'token 1234567890';
    },
);
