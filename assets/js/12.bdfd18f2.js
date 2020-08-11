(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vtuber-运势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtuber-运势"}},[t._v("#")]),t._v(" Vtuber 运势")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("使用时，请保证所有配置文件在 UTF-8 编码下保存。"),a("br"),t._v("\n若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8")])]),t._v(" "),a("h2",{attrs:{id:"部署流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署流程"}},[t._v("#")]),t._v(" 部署流程")]),t._v(" "),a("h3",{attrs:{id:"安装-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-sdk"}},[t._v("#")]),t._v(" 安装 SDK")]),t._v(" "),a("p",[t._v("确保你已经安装了基础 "),a("RouterLink",{attrs:{to:"/guide/guide.html"}},[t._v("SDK")]),t._v(" 。")],1),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("直接在 "),a("a",{attrs:{href:"https://github.com/fz6m/opqqq-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("releases"),a("OutboundLink")],1),t._v(" 中下载该插件，亦或 clone 等方式打包下载本项目。")]),t._v(" "),a("p",[t._v("注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。")]),t._v(" "),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("p",[t._v("安装本插件依赖：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-dateutil\n    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pillow\n")])])]),a("p",[t._v("注：如果您下载依赖太慢，可选用大清源加速，例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -i https://pypi.tuna.tsinghua.edu.cn/simple pillow\n")])])]),a("h3",{attrs:{id:"添加账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加账号"}},[t._v("#")]),t._v(" 添加账号")]),t._v(" "),a("p",[t._v("在下载的 "),a("code",[t._v("bot.py")]),t._v(" 主程序内，你需要修改 "),a("code",[t._v("bot_qq")]),t._v(" 为自己的机器人账号：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    bot_qq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345678")]),t._v("\n")])])]),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),a("p",[t._v("你可以在群内发送如下指令之一触发该插件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    今日人品\n    今日运势\n    抽签\n    人品\n    运势\n    小狐狸签\n    吹雪签\n")])])]),a("p",[t._v("当使用 "),a("code",[t._v("小狐狸签")]),t._v(" 和 "),a("code",[t._v("吹雪签")]),t._v(" 时，底图固定为白上吹雪。")]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h3",{attrs:{id:"触发命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发命令"}},[t._v("#")]),t._v(" 触发命令")]),t._v(" "),a("p",[t._v("你可以在 "),a("code",[t._v("plugins/bot_vtuber_fortune.py")]),t._v(" 的第 13 行找到如下触发指令列表：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发命令列表")]),t._v("\n    commandList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日人品'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日运势'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'抽签'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'人品'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'运势'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小狐狸签'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'吹雪签'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"文案增改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文案增改"}},[t._v("#")]),t._v(" 文案增改")]),t._v(" "),a("p",[t._v("你可以在 "),a("code",[t._v("resources/vtuber-fortune/fortune/copywriting.json")]),t._v(" 找到所有运势文案内容，按照其已有格式添加结构即可：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"good-luck"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"曾经的努力和经验会成为他人眼中魅力的样子"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中：")]),t._v(" "),a("p",[a("code",[t._v("good-luck")]),t._v(" ： 吉凶度 的编号，在同文件夹的 "),a("code",[t._v("resources/vtuber-fortune/fortune/goodLuck.json")]),t._v(" 可以找到吉凶度设定，受字体限制，吉凶度是日语，请不要加入中文。")]),t._v(" "),a("p",[a("code",[t._v("content")]),t._v(" ：运势文案内容，最多 36 字（包括汉字、空格、字母、标点，均占 1 个字）。")]),t._v(" "),a("h3",{attrs:{id:"文案来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文案来源"}},[t._v("#")]),t._v(" 文案来源")]),t._v(" "),a("p",[t._v("插件自带了 175 条运势文案，来自于 hololive 早安系列第 3.13 - 3.29 期，如果想自己添加文案却没有头绪，可以参考其他期视频添加。")]),t._v(" "),a("h3",{attrs:{id:"吉凶度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吉凶度"}},[t._v("#")]),t._v(" 吉凶度")]),t._v(" "),a("p",[t._v("配置 吉凶度 设定的 "),a("code",[t._v("resources/vtuber-fortune/fortune/goodLuck.json")]),t._v(" 文件，如果需要改动，要保证新增满足如下结构：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"good-luck"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"大吉"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中：")]),t._v(" "),a("p",[a("code",[t._v("name")]),t._v("：为吉凶度名称，最多 3 个汉字或假名，必须为日语。")]),t._v(" "),a("p",[a("code",[t._v("good-luck")]),t._v("：代表 吉凶度 代号，默认已经提供了 19 个吉凶度可供选择，其吉凶排序来自于 "),a("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E5%90%89%E5%87%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v(" 百科。")]),t._v(" "),a("p",[t._v("要问为什么 吉 在 小吉 之后，我也不知道，实际使用时可以根据习惯来选择吉凶度，单独给予每一个吉凶度代号是为了方便不会日语的人，不需要在意其具体好坏。")]),t._v(" "),a("p",[t._v("一些吉凶度说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("半吉")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("没有 大吉、中吉、小吉、吉 那么好，但是要比 末吉、末小吉 要好")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("末吉")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这里的“末”指好运将要到来的意思，也就是现在并没有好坏，未来将会演变为 吉、小吉、中吉 等，当然也有可能变为 大吉")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("仕事運")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“仕事”是工作的意思，也就是工作、职场上的好运")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("勉強運")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“勉強”是学习的意思，也就是与学习、学业相关的运气")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("関係運")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指人际关系方面的运气")])])])]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[t._v("您可以安装 "),a("code",[t._v("ujson")]),t._v(" 依赖以加速 json 读取的速度：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ujson\n")])])]),a("p",[t._v("注：如果安装 "),a("code",[t._v("ujson")]),t._v(" 依赖失败，你可以放弃安装，从而会自动使用已有 "),a("code",[t._v("json")]),t._v(" 库代替 "),a("code",[t._v("ujson")]),t._v(" （性能较低），你也可以在 "),a("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 下载对应你 "),a("code",[t._v("python")]),t._v(" 版本和位数的 "),a("code",[t._v("ujson")]),t._v(" 安装包，之后执行本地安装即可：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 本地 ujson 安装包"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".whl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("路径\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);