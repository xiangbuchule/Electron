interface electron {
    // chrome版本
    chromeVersion: process.versions['chrome'];
    // node版本
    nodeVersion: process.versions['node'];
    // electron版本
    electronVersion: process.versions['electron'];
    // ipcRenderer对象
    ipcRenderer: ipcRenderers;
}
