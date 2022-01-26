// indexIPC对象
interface indexIPC {
    // login函数
    login: (userId: number, password: string) => Promise<string>;
}

// ipcRenderer对象
interface ipcRenderers {
    // indexIPC对象
    indexIPC: indexIPC;
}
