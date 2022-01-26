const {join} = require('path');

/**
 * electron-forge配置
 */
module.exports = {
    packagerConfig: {
        // app的名字，默认为项目名或package.json的name属性
        name: 'Saber',
        // app应用程序id
        appBundleId: 'Saber',
        // 版权信息
        appCopyright: 'Electron React App',
        // app版本，默认为package.json的版本
        appVersion: '1.0.0',
        // 构建版本，默认为appVersion的值
        // buildVersion: '1.0.0',
        // 应用图标
        icon: join(__dirname, './resources/favicon.ico'),
        // 可执行文件名，默认值为上边name的值
        // executableName: 'Saber',
        // electron的版本
        electronVersion: process.versions.electron,
        // 构建源文件目录
        // dir: join(__dirname, '../app'),
        // 打包输出的目录
        // out: join(__dirname, '../release'),
        // 打包时压缩，防止window文件路径名过长报错，默认false
        asar: false,

        // 临时文件存放目录
        tmpdir: join(__dirname, '../temp'),
        // 是否打印打包过程中的错误（静默模式）,默认false
        // quiet: false,
        // 打包时去掉package.json中的devDependencies中的包，默认true
        // prune: true,
        // 系统版本 ArchOption | ArchOption[]
        // all 所有版本
        // ia32 windows32位
        // armv7l arm32位
        // arm64 arm64位，需要Linux：Electron 1.8.0；Windows：6.0.8；macOS：11.0.0 - beta.1 及以上
        // mips64el 需要(Electron 1.8.2-beta.5 to 1.8.8)
        // arch: 'x64',
        // 构建的平台，可用[]多选。如['darwin','linux']
        // all表示所有，默认all
        // darwin （苹果系统）
        // linux
        // mas （macOS，专门用于提交到 Mac App Store）
        // win32
        // platform: 'win32',
        // 再次打包时是覆盖，还是删除后重新创建，默认false
        // overwrite: false,
        // 打包时忽略那些文件。（RegExp | RegExp[] | IgnoreFunction）
        ignore: [
            '.git',
            '.gitignore',
            '.gitattributes',

            '.vscode',
            '@types',
            'app',
            'out',
            'resources',
            'release/babel',
            'extensions',

            '.eslintignore',
            '.eslintrc.js',
            '.config.js',
            '.plugins.js',
            '.map',
            'package-lock.json',
            'tsconfig.json',
            'clean.bat',
            'clean.sh',
            'README.md',
        ],
        // 打包时复制一些其他文件到程序的resources目录下，接受字符串数组
        // extraResource: 'a.cpp',
        // 在复制应用程序源期间是否应取消引用符号链接。默认为true.
        // derefSymlinks: true,
    },
    electronRebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // 证书文件
                // certificateFile: './cert.pfx',
                // 证书密码
                // certificatePassword: 'this-is-a-secret',
            },
        },
        {
            name: '@electron-forge/maker-zip',
        },
    ],
    publishers: [],
    plugins: [],
    hooks: {},
    buildIdentifier: 'build',
};
