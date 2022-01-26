/**
 * babel条件编译，这种方式是基于AST词法解析
 * 参考https://www.jianshu.com/p/8245e555fde4
 * 该条件编译可以使用webpack的js-conditional-compile-loader
 * 这个loader来实现条件编译https://segmentfault.com/a/1190000020102151
 * 这种方式只是文本替换
 * 两种方式都有缺陷
 * 第一种是变量作用域被限制，里边定义的const变量，在外边无法使用
 * 第二种是无法定义重复的const变量
 * @param {*} babel babel对象
 * @param {*} options babel配置文件中插件配置的option参数对象
 * @returns
 */
module.exports = (babel, options) => {
    const t = babel.types;
    const conditionEnvs = options;
    return {
        visitor: {
            // 对debugger进行处理
            DebuggerStatement(path) {
                // 获取节点
                const node = path.node;
                // console.log调用，删除
                if (t.isDebuggerStatement(node) && conditionEnvs.isRemoveDebugInfo === 'y') {
                    // 删除该节点
                    path.remove();
                    // 跳过此次遍历
                    path.skip();
                }
            },
            // 对函数调用进行处理
            CallExpression(path) {
                // 获取节点
                const node = path.node;
                // console.log调用，删除
                if (
                    t.isCallExpression(node) &&
                    conditionEnvs.isRemoveDebugInfo === 'y' &&
                    node.callee.hasOwnProperty('object') &&
                    node.callee.object.hasOwnProperty('name') &&
                    node.callee.object.name === 'console'
                ) {
                    // 删除该节点
                    path.remove();
                    // 跳过此次遍历
                    path.skip();
                }
            },
            // 对label进行处理
            LabeledStatement(path) {
                // 获取节点
                const node = path.node;
                /**
                 * 如果node节点的body体为BlockStatement，那么说明是如下形式
                 * xxx: {
                 *     xxxxxx
                 * }
                 * 而不是这种形式
                 * xxx: for(xxxx){} 或者 xxx: while(xxxx){} 或者 xxx: switch(xxx){}
                 */
                if (t.isLabeledStatement(node) && node.body.type === 'BlockStatement') {
                    // 获取标签名即那个冒号前的xxx
                    const labelName = node.label.name;
                    // 根据选项来判断，如果保留就保留，否则就不保留
                    if (conditionEnvs.holdList.indexOf(labelName) > -1) {
                        /**
                         * 保留的处理
                         * 去掉当前节点，将子节点放到当前这一层
                         * 先将所有子节点插入到该节点前
                         * 然后删除该节点
                         */
                        path.insertBefore(node.body.body);
                        // 删除该节点
                        path.remove();
                        // 跳过此次遍历
                        path.skip();
                    } else if (conditionEnvs.removeList.indexOf(labelName) > -1) {
                        // 删除该节点
                        path.remove();
                        // 跳过此次遍历
                        path.skip();
                    } else {
                        // 删除该节点
                        path.remove();
                        // 跳过此次遍历
                        path.skip();
                    }
                }
            },
        },
    };
};
