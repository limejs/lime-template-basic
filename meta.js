module.exports = {
    // 编译完成的消息
    completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}",
    // 编译完成的回调
    complete(data, {
        logger,
        chalk,
        files
    }) {
        // can access data.inPlace, data.destDirName
        logger.log(chalk.green('恭喜，项目初始化完毕!'))
    },
    // 忽略渲染的文件  glob pattern
    skipInterpolation: "mvc/**/*",
    // 过滤: test 目录只在用户 prompt 交互时选择了 needTests 才生成。
    filters: {
        "test/**/*": "needTests"
    },
    // handlerbar 的自定义 helper.  两个常用 Handlebars helpers已经内置:  if_eq 和 unless_eq （常用来判断prompt答案）
    helpers: {
        lowercase: str => str.toLowerCase()
    },
    // 参考 https://github.com/SBoudrias/Inquirer.js/
    prompts: {
        "name": {
            type: 'string',
            required: true,
            message: '项目名称'
        },
        "desc": {
            type: 'string',
            required: true,
            message: '项目描述',
            default: '一个基于 LIME.JS 框架的基础项目样板'
        },
        "test": {
            "type": "confirm",
            "message": "是否开启单元测试?"
        },
        "mvc": {
            "type": "checkbox",
            "message": "需要哪些模块?",
            "choices": [
                "controller",
                "model",
                "view"
            ]
        }
        "lintConfig": {
            "when": "test",
            "type": "list",
            "message": "Pick a lint config",
            "choices": [
                "standard",
                "airbnb",
                "none"
            ]
        }
    }

}