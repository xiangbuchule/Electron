import ipcChannels from '../../common/ipcChannels';
import {ipcRenderer} from 'electron';

// 登录的处理
const login_ipc = async (userId: number, password: string): Promise<string> => {
    const send = await ipcRenderer.invoke(ipcChannels.login, userId, password);
    return send;
};

export default {
    login: login_ipc,
};
