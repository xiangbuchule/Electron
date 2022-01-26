// 全局window对象
declare global {
    interface Window {
        electron: electron | undefined | null;
    }
}

export {};
