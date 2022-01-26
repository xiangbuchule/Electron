const {join} = require('path');

/**
 * ESLint配置
 */
module.exports = {
    root: true,
    // 规范的环境
    env: {
        // 浏览器环境
        browser: false,
        // es2021环境
        es2021: true,
        // node环境
        node: true,
    },
    // 继承的rules
    extends: [
        // 默认的rules，官网打勾的自动开启
        'eslint:recommended',
        // ts的默认rules
        'plugin:@typescript-eslint/recommended',
        // prettier的rules
        'plugin:prettier/recommended',
    ],
    // eslint解析代码使用的解析器模块
    parser: '@typescript-eslint/parser',
    // 解析的配置
    parserOptions: {
        // es版本13
        ecmaVersion: 13,
        // 模块是es格式的模块，不是commonjs格式的模块
        sourceType: 'module',
    },
    // 插件
    plugins: [
        // ts的插件
        '@typescript-eslint',
        // prettier插件
        'prettier',
    ],
    // 具体的规格配置
    rules: {
        /**
         * prettier配置
         */
        'prettier/prettier': 2, // 这项配置对于不符合prettier规范的写法，eslint会提示报错
        /**
         * Possible Errors
         */
        'no-await-in-loop': 2, // 禁止在循环中出现 await
        'no-console': 1, // 禁用 console
        'no-extra-parens': 0, // 禁止不必要的括号
        'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法
        /**
         * Best Practices
         */
        'accessor-pairs': 1, // 强制 getter 和 setter 在对象中成对出现
        'array-callback-return': 2, // 强制数组方法的回调函数中有 return 语句
        'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
        'class-methods-use-this': 1, // 强制类方法使用 this
        complexity: 1, // 指定程序中允许的最大环路复杂度
        'consistent-return': 2, // 要求 return 语句要么总是指定返回的值，要么不指定
        curly: ['error', 'all'], // 强制所有控制语句使用一致的括号风格
        'default-case': 2, // 要求 switch 语句中有 default 分支
        'dot-location': 0, // 强制在点号之前和之后一致的换行
        'dot-notation': 2, // 强制尽可能地使用点号
        eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
        'guard-for-in': 2, // 要求 for-in 循环中有一个 if 语句
        'max-classes-per-file': ['error', 5], // 强制每个文件中包含的的类的最大数量
        'no-alert': 1, // 禁用 alert、confirm 和 prompt
        'no-caller': 1, // 禁用 arguments.caller 或 arguments.callee
        'no-div-regex': 2, // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-debugger': 1, // 禁止使用debugger
        'no-else-return': 2, // 禁止 if 语句中 return 语句之后有 else 块
        'no-empty-function': 2, // 禁止出现空函数
        'no-eq-null': 2, // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eval': 2, // 禁用 eval()
        'no-extend-native': 2, // 禁止扩展原生类型
        'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
        'no-extra-label': 2, // 禁用不必要的标签
        'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
        'no-implicit-coercion': 2, // 禁止使用短符号进行类型转换
        'no-implicit-globals': 2, // 禁止在全局范围内使用变量声明和 function 声明
        'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
        'no-invalid-this': 2, // 禁止 this 关键字出现在类和类对象之外
        'no-iterator': 2, // 禁用 __iterator__ 属性
        // 'no-labels': ['error', {allowLoop: true, allowSwitch: true}], // 禁用标签语句
        'no-labels': 0, // 允许使用标签语句
        'no-unused-labels': 0, // 允许出现未使用过的标签语句
        'no-lone-blocks': 2, // 禁用不必要的嵌套块
        'no-loop-func': 2, // 禁止在循环语句中出现包含不安全引用的函数声明
        'no-magic-numbers': 1, // 禁用魔术数字
        'no-multi-spaces': 2, // 禁止使用多个空格
        'no-multi-str': 2, // 禁止使用多行字符串
        'no-new': 2, // 禁止使用 new 以避免产生副作用
        'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符
        'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
        'no-param-reassign': 2, // 禁止对 function 的参数进行重新赋值
        'no-proto': 2, // 禁用 __proto__ 属性
        // 'no-restricted-properties': 2, // 禁止使用对象的某些属性
        'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
        'no-return-await': 2, // 禁用不必要的 return await
        'no-script-url': 2, // 禁止使用 javascript url
        'no-self-compare': 2, // 禁止自身比较
        'no-sequences': 2, // 禁用逗号操作符
        'no-throw-literal': 2, // 禁止抛出异常字面量
        'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
        'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
        'no-useless-concat': 2, // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-return': 2, // 禁止多余的 return 语句
        'no-void': 2, // 禁用 void 操作符
        // 'no-warning-comments': 2, // 禁止在注释中使用特定的警告术语
        'prefer-named-capture-group': 2, // 建议在正则表达式中使用命名捕获组
        'prefer-promise-reject-errors': 2, // 要求使用 Error 对象作为 Promise 拒绝的原因
        radix: 1, // 强制在 parseInt() 使用基数参数
        'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
        'require-unicode-regexp': 2, // 强制在 RegExp 上使用 u 标志
        'vars-on-top': 2, // 要求所有的 var 声明出现在它们所在的作用域顶部
        /**
         * Strict Mode
         */
        strict: 2, // 要求或禁止使用严格模式指令
        /**
         * Variables
         */
        'init-declarations': 1, // 要求或禁止 var 声明中的初始化
        'no-label-var': 2, // 不允许标签与变量同名
        // 'no-restricted-globals': 2, // 禁用特定的全局变量
        'no-shadow': 2, // 禁止变量声明与外层作用域的变量同名
        'no-undef-init': 2, // 禁止将变量初始化为 undefined,
        'no-undefined': 2, // 禁止将 undefined 作为标识符
        'no-use-before-define': 1, // 禁止在变量定义之前使用它们
        /**
         * Node.js and CommonJS
         */
        'callback-return': 2, // 强制数组方法的回调函数中有 return 语句
        'global-require': 1, // 要求 require() 出现在顶层模块作用域中
        'handle-callback-err': 0, // 要求回调函数中有容错处理
        'no-buffer-constructor': 2, // 禁用 Buffer() 构造函数
        'no-mixed-requires': 2, // 禁止混合常规变量声明和 require 调用
        'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
        'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-process-env': 2, // 禁用 process.env
        'no-process-exit': 2, // 禁用 process.exit()
        // 'no-restricted-modules': 2, // 禁用通过 require 加载的指定模块
        'no-sync': 1, // 禁用同步方法
        /**
         * Stylistic Issues
         * 代码风格控制使用prettier
         */
        /**
         * ECMAScript 6
         */
        'arrow-body-style': 0, // 要求箭头函数体使用大括号
        'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
        'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
        'generator-star-spacing': ['error', {before: true, after: false}], // 强制 generator 函数中 * 号周围使用一致的空格
        'no-confusing-arrow': 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        'no-duplicate-imports': 2, // 禁止重复模块导入
        // 'no-restricted-imports': 2, // 禁止使用指定的 import 加载的模块
        'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 1, // 禁用不必要的构造函数
        'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        'no-var': 2, // 要求使用 let 或 const 而不是 var
        'object-shorthand': 2, // 要求或禁止对象字面量中方法和属性使用简写语法
        'prefer-arrow-callback': 0, // 要求回调函数使用箭头函数
        'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
        'prefer-destructuring': 1, // 优先使用数组和对象解构
        'prefer-numeric-literals': 1, // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
        'prefer-rest-params': 1, // 要求使用剩余参数而不是 arguments
        'prefer-spread': 2, // 要求使用扩展运算符而非 .apply()
        'prefer-template': 2, // 要求使用模板字面量而非字符串连接
        'rest-spread-spacing': 2, // 强制剩余和扩展运算符及其表达式之间有空格
        'sort-imports': 2, // 强制模块内的 import 排序
        'symbol-description': 2, // 要求 symbol 描述
        'template-curly-spacing': 2, // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'yield-star-spacing': ['error', 'before'], // 强制在 yield* 表达式中 * 周围使用空格
    },
};
