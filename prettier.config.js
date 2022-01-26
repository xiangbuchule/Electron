/**
 * prettier配置文件
 */
module.exports = {
    printWidth: 100, // 每行代码长度（默认80）
    tabWidth: 4, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
    useTabs: false, // 是否使用tab
    semi: true, // 声明结尾使用分号(默认true)
    singleQuote: true, // 使用单引号（默认false）
    quoteProps: 'as-needed', // 对象属性声明如果需要使用引号就使用引号
    jsxSingleQuote: true, // 在 JSX 中使用单引号代替双引号。
    trailingComma: 'all', // 多行使用拖尾逗号（默认none）
    bracketSpacing: false, // 对象字面量的大括号间使用空格（默认true）
    bracketSameLine: false, // 将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）
    /**
     * 箭头函数参数括号 默认avoid 可选 avoid| always
     * avoid 能省略括号的时候就省略 例如x => x
     * always 总是有括号
     */
    arrowParens: 'avoid',
    // 指定换行符
    endOfLine: 'lf',
};
