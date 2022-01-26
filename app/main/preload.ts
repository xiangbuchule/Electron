import {contextBridge} from 'electron';

import ipcRenderers from './windows/ipcRenderer';

/**
 * 将api注入到渲染进程中的window对象中，属性为electron，值为一个对象。
 * 该对象包含一个为ipcRenderer的对象。那么就可以在react页面中
 * 使用window.electron来使用electron对象的内容（包括属性以及方法）。
 * 相当于将electron对象暴露给react使用了。
 */
contextBridge.exposeInMainWorld('electron', {
    // chrome版本
    chromeVersion: process.versions.chrome,
    // node版本
    nodeVersion: process.versions.node,
    // electron版本
    electronVersion: process.versions.electron,
    // ipcRenderer对象
    ipcRenderer: ipcRenderers,
});

// 在渲染进程渲染前替换页面某些内容
// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//         const element = document.getElementById(selector);
//         if (element) element.innerText = text;
//     };

//     const type = ['chrome', 'node', 'electron'];
//     for (let index = 0; index < type.length; index++) {
//         const element = type[index];
//         if (index !== type.length - 1) {
//             replaceText(`${element}-version`, ` ${element} ${process.versions[element]},`);
//         } else {
//             replaceText(`${element}-version`, ` ${element} ${process.versions[element]}.`);
//         }
//     }
// });
