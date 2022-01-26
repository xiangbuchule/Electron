const os = require('os');

// 如果不是以下平台的就保留用平台的otherPlatforms
const platforms = ['win32', 'darwin', 'linux'];
const getOSPlactform = () => {
    return platforms.indexOf(os.platform()) >= 0 ? os.platform() : 'otherPlatforms';
};

/**
 * babel配置文件
 * 由于不需要兼容浏览器，那么以下4个运行时需要的库不需要了
 * @babel/polyfill
 * @babel/runtime
 * @babel/runtime-corejs3
 * core-js
 * 由于不需要兼容浏览器，那么以下2个开发时需要的库不需要了
 * @babel/plugin-transform-runtime
 * @babel/preset-env
 * babel只是用来做条件编译使用
 */
module.exports = {
    // 在紧凑模式下生成代码时，将省略所有可选的换行符和空格
    compact: true,
    // 生成map文件
    sourceMaps: 'both',
    // 设置babel使用的代码解析器
    presets: [
        // [
        //     '@babel/preset-env',
        //     {
        //         modules: 'commonjs',
        //         useBuiltIns: 'usage',
        //         corejs: '3',
        //         targets: {
        //             // 支持ie8，直接使用iOS浏览器版本7
        //             // browsers: ['ie >= 8', 'iOS 7', ],
        //             chrome: '96',
        //         },
        //     },
        // ],
        '@babel/typescript',
    ],
    // 设置babel使用的插件
    plugins: [
        // [
        //     '@babel/plugin-transform-runtime',
        //     {
        //         corejs: 3,
        //     },
        // ],
        [
            './babel.plugins.js',
            {
                /**
                 * 是否保留debug语句
                 * console.log()
                 * debugger
                 * 值为y表示确认移除调试代码
                 * 值为n表示保留调试代码
                 * process.env.isRemoveDebugInfo为命令行参数
                 */
                isRemoveDebugInfo: process.env.isRemoveDebugInfo === 'Y',
                /**
                 * 如果保留的列表和删除的列表都存在
                 * 那么保留，不删除
                 * process.env.compileMode为命令行参数
                 */
                holdList: [
                    // 打包环境，是开发还是生产
                    process.env.compileMode,
                    /**
                     * 打包平台，是linux、windows、macOS
                     * windows: win32
                     * darwin: macOS
                     * linux: linux
                     */
                    getOSPlactform(),
                ],
                // 需要删除的列表
                removeList: [],
            },
        ],
    ],
};
