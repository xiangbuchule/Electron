const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {join} = require('path');
const os = require('os');
const nodeExternals = require('webpack-node-externals');
const webpackBar = require('webpackbar');

// webpack 配置文件
module.exports = {
    // 打包目标为electron的js代码
    target: 'electron-main',
    // 入口配置
    entry: {
        // 配置main入口文件
        main: join(__dirname, './app/main/main.ts'),
        // 配置preload入口文件
        preload: join(__dirname, './app/main/preload.ts'),
    },
    // 输出配置
    output: {
        filename: '[name].js',
        path: join(__dirname, './release/electron'),
        // 输出打包后的js格式为commonjs的格式
        libraryTarget: 'commonjs2',
    },
    // 解析路径、文件配置
    resolve: {
        // 优化模块查找路径
        modules: [
            // 指定源码目录
            join(__dirname, './app/main'),
            // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
            join(__dirname, './node_modules'),
        ],
        /**
         * webpack尝试顺序解析的后缀名
         * 让webpack能解析.ts文件的依赖关系
         */
        extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
    },
    // 为了忽略诸如path、fs等内置模块。
    externalsPresets: {node: true},
    // 不将node_modules中的模块打包进js文件中，仅将其作为外部模块依赖
    externals: [nodeExternals()],
    // loader配置
    module: {
        rules: [
            // ts文件的loader配置
            {
                // 匹配那些文件
                test: /\.(ts|js|jsx|tsx)$/u,
                /**
                 * 使用什么loader解析
                 * 从下往上、从右往左执行
                 */
                use: [
                    // ts的解析器
                    'babel-loader',
                    // 条件编译js-conditional-compile-loader
                    {
                        loader: 'js-conditional-compile-loader',
                        options: {
                            isRemoveDebugInfo: process.env.isRemoveDebugInfo === 'Y',
                            Development: process.env.compileMode === 'Development',
                            Production: process.env.compileMode === 'Production',
                            win32: os.platform() === 'win32',
                            linux: os.platform() === 'linux',
                            darwin: os.platform() === 'darwin',
                            otherPlatforms: true,
                        },
                    },
                ],
                // 排除的目录
                exclude: join(__dirname, './node_modules'),
                // 指定需要找的目录
                include: join(__dirname, './app/main'),
            },
            // js文件的loader配置
        ],
    },
    // 插件配置
    plugins: [
        // 清理上一次编译结果插件
        new CleanWebpackPlugin(),
        // webpack打包进度条插件
        new webpackBar(),
    ],
    // 配置生成source-map文件
    // devtool: 'source-map',
    // 模式配置
    // mode: 'production',
};
