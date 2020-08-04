(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{361:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"自定义表情包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义表情包"}},[t._v("#")]),t._v(" 自定义表情包")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("使用时，请保证所有配置文件在 UTF-8 编码下保存。"),e("br"),t._v("\n若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8")])]),t._v(" "),e("h2",{attrs:{id:"部署流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署流程"}},[t._v("#")]),t._v(" 部署流程")]),t._v(" "),e("h3",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),e("p",[t._v("直接在 "),e("a",{attrs:{href:"https://github.com/fz6m/iotqq-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("releases"),e("OutboundLink")],1),t._v(" 中下载该插件，亦或 clone 等方式打包下载本项目。")]),t._v(" "),e("p",[t._v("注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。")]),t._v(" "),e("h3",{attrs:{id:"安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),e("p",[t._v("安装本插件依赖：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("    pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pillow\n    pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" qrcode\n")])])]),e("p",[t._v("注：如果您下载依赖太慢，可选用大清源加速，例：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("    pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -i https://pypi.tuna.tsinghua.edu.cn/simple pillow\n")])])]),e("h3",{attrs:{id:"添加账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加账号"}},[t._v("#")]),t._v(" 添加账号")]),t._v(" "),e("p",[t._v("在下载的 "),e("code",[t._v("bot.py")]),t._v(" 主程序内，你需要修改 "),e("code",[t._v("bot_qq")]),t._v(" 为自己的机器人账号：")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    bot_qq "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345678")]),t._v("\n")])])]),e("h3",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),e("p",[t._v("在群内可以使用如下指令：")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 制造表情包")]),t._v("\n    xxx.jpg\n    XXX.JPG\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换自己的表情包底图")]),t._v("\n    img 表情包别名\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看表情包列表")]),t._v("\n    img list\n")])])]),e("p",[t._v("注：表情包列表将以自动制作的二维码图片形式呈现，扫码后可查看已经配置的表情包有哪些，如想自定义该图片或放弃使用查询功能，请参照后文配置。")]),t._v(" "),e("h2",{attrs:{id:"自定义方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义方法"}},[t._v("#")]),t._v(" 自定义方法")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("resources/image-custom")]),t._v(" 下有 "),e("code",[t._v("image_data")]),t._v(" 文件夹，也就是 自定义表情包资源 存放的文件夹，该文件夹和基于 nonebot 开发的 "),e("a",{attrs:{href:"https://github.com/fz6m/nonebot-plugin/tree/master/CQimage",target:"_blank",rel:"noopener noreferrer"}},[t._v("本插件"),e("OutboundLink")],1),t._v(" 完全兼容，包括内部配置结构完全一致，使用本插件的 nonebot 用户可以无代价的将资源转移后即开即用。")]),t._v(" "),e("h3",{attrs:{id:"配置结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置结构"}},[t._v("#")]),t._v(" 配置结构")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在 "),e("code",[t._v("resources/image-custom/image_data")]),t._v(" 中，每个表情包拥有自己独立的文件夹，我们先取一个标识，以便进行配置，这里假设该表情名为 "),e("code",[t._v("stamp")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("image_data")]),t._v(" 内建立一个名为 "),e("code",[t._v("stamp")]),t._v(" 的文件夹，之后在 "),e("code",[t._v("stamp")]),t._v(" 内放入你的表情包图片（并命名为 "),e("code",[t._v("stamp.jpg")]),t._v("），并新建配置 "),e("code",[t._v("config.ini")]),t._v(" ：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    {\n        "name":"stamp",\n        "font_max":220,\n        "font_size":40,\n        "font_center_x":125,\n        "font_center_y":220,\n        "color":"black",\n        "font_sub":5\n    }\n')])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图文件名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图内添加文字可能的最大长度，一般为 "),e("code",[t._v("图片宽度 - 40")]),t._v(" (大图) 或 "),e("code",[t._v("图片宽度 - 20")]),t._v(" (小图)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图内添加文字的尺寸")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_center_x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图内添加文字的中心点x位，一般为 "),e("code",[t._v("图片宽度 / 2")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_center_y")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图内添加文字的中心点y位（由上至下递增）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表情图内添加文字的颜色，一般取 "),e("code",[t._v("black")]),t._v(" / "),e("code",[t._v("white")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_sub")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("控制文字大小衰减的档位，一般为 "),e("code",[t._v("5")]),t._v("（更精细也可以）")])])])]),t._v(" "),e("p",[t._v("注意：")]),t._v(" "),e("ol",[e("li",[t._v("建议使用 "),e("code",[t._v(".jpg")]),t._v(" 格式图片，"),e("code",[t._v(".png")]),t._v(" 图片渲染后太大。")]),t._v(" "),e("li",[e("strong",[t._v("三个一样")]),t._v("：表情包自己的文件夹名、表情文件名、配置文件内 "),e("code",[t._v("name")]),t._v(" 属性值，三个地方应该保持一致。")])])]),t._v(" "),e("li",[e("p",[t._v("为了更好的选定配置 "),e("code",[t._v("config.ini")]),t._v(" 内的参数取值，一种参考图如下：")]),t._v(" "),e("img",{staticClass:"my-img",attrs:{src:t.$withBase("/image-custom-example.jpg"),width:"70%"}}),t._v(" "),e("p",[t._v("注：看不了图说明 DNS 被污染了，请配置 "),e("a",{attrs:{href:"https://blog.csdn.net/qq_21567385/article/details/105951488",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Hosts"),e("OutboundLink")],1),t._v(" 或者开启代理。")])]),t._v(" "),e("li",[e("p",[t._v("在画图工具内编辑图片，可以在左下角看到鼠标相应的像素点与图片尺寸，比划一下，我们就可以这样得到（这只是一个例子）：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("左右边长度（一般为 10-20），之后用宽度扣减 2 倍")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("比划一下白色上限和下限，y 值相差")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_center_x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("直接图像宽度除 2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_center_y")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("刚刚我们比划了白色区域上下边界了，y 相加除 2 即可")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("font_sub")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("直接填 5")])])])])])]),t._v(" "),e("h3",{attrs:{id:"添加别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加别名"}},[t._v("#")]),t._v(" 添加别名")]),t._v(" "),e("p",[t._v("配置好表情包自己的文件夹后，往 "),e("code",[t._v("resources/image-custom/image_data/bieming/name.ini")]),t._v(" 内添加面向用户友好的别名，按行标识，格式如下：")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[t._v("    别名 表情包标识\n")])])]),e("p",[t._v("别名是指用户切换时使用的，一般为汉字。")]),t._v(" "),e("p",[t._v("表情包标识即为刚刚建立的表情包文件夹名。")]),t._v(" "),e("h2",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),e("p",[t._v("你可以在 "),e("code",[t._v("plugins/bot_image_custom.py")]),t._v(" 文件开头找到如下配置：")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 屏蔽群 例：[12345678, 87654321]")]),t._v("\n    blockGroupNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器配置")]),t._v("\n    host "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1'")]),t._v("\n    port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否自动制作表情列表二维码 默认是 ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表情太多时二维码可能装不下扫不出来，请自行制作或者删去 resources/list.jpg 即关闭查询表情列表图（qrListOpen 也要关闭）")]),t._v("\n    qrListOpen "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表情包字体")]),t._v("\n    fontPath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("RESOURCES_BASE_PATH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/font/simhei.ttf'")])]),t._v("\n")])])]),e("p",[t._v("一般情况不需要修改。")]),t._v(" "),e("h3",{attrs:{id:"屏蔽群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#屏蔽群"}},[t._v("#")]),t._v(" 屏蔽群")]),t._v(" "),e("p",[t._v("当您想屏蔽哪个群时，可以在本插件内配置屏蔽使用本插件的群号，例：")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    blockGroupNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345678")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("87654321")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"自定义表情包列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义表情包列表"}},[t._v("#")]),t._v(" 自定义表情包列表")]),t._v(" "),e("p",[t._v("只要在 "),e("code",[t._v("resources/image-custom/image_data/bieming/name.ini")]),t._v(" 配置了表情包，当使用 "),e("code",[t._v("img list")]),t._v(" 查询命令时，默认会生成带表情包别名信息的二维码，用户扫码即可查看所有可用的表情包名字。")]),t._v(" "),e("p",[t._v("如果您需要自定义该图片，请将 "),e("code",[t._v("qrListOpen")]),t._v(" 设为 "),e("code",[t._v("False")]),t._v(" 即关闭自动生成，同时在 "),e("code",[t._v("resources/image-custom/list.jpg")]),t._v(" 下提供同名图片文件。")]),t._v(" "),e("p",[t._v("如果您不需要此查询功能，请将 "),e("code",[t._v("qrListOpen")]),t._v(" 设为 "),e("code",[t._v("False")]),t._v(" 即关闭自动生成，同时删去 "),e("code",[t._v("resources/image-custom/list.jpg")]),t._v(" 。")]),t._v(" "),e("h2",{attrs:{id:"文件夹介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件夹介绍"}},[t._v("#")]),t._v(" 文件夹介绍")]),t._v(" "),e("h3",{attrs:{id:"resources-image-custom-文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources-image-custom-文件夹"}},[t._v("#")]),t._v(" "),e("code",[t._v("resources/image-custom")]),t._v(" 文件夹")]),t._v(" "),e("p",[t._v("放置该插件资源的位置。")]),t._v(" "),e("h3",{attrs:{id:"resources-font-文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources-font-文件夹"}},[t._v("#")]),t._v(" "),e("code",[t._v("resources/font")]),t._v(" 文件夹")]),t._v(" "),e("p",[t._v("在 linux 系统上没有中文字体，为减少安装成本，将使用我们自己提供的字体文件（默认为 "),e("code",[t._v("resources/font/simhei.ttf")]),t._v(" 即黑体）。")]),t._v(" "),e("p",[t._v("您也可以在 "),e("code",[t._v("plugins/bot_image_custom.py")]),t._v(" 内的第 "),e("code",[t._v("16")]),t._v(" 行修改该字体：")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表情包字体")]),t._v("\n    fontPath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("RESOURCES_BASE_PATH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/font/simhei.ttf'")])]),t._v("\n")])])]),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("p",[t._v("您可以安装 "),e("code",[t._v("ujson")]),t._v(" 依赖以加速 json 读取的速度：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("    pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ujson\n")])])]),e("p",[t._v("注：如果安装 "),e("code",[t._v("ujson")]),t._v(" 依赖失败，你可以放弃安装，从而会自动使用已有 "),e("code",[t._v("json")]),t._v(" 库代替 "),e("code",[t._v("ujson")]),t._v(" （性能较低），你也可以在 "),e("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 下载对应你 "),e("code",[t._v("python")]),t._v(" 版本和位数的 "),e("code",[t._v("ujson")]),t._v(" 安装包，之后执行本地安装即可：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("    pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 本地 ujson 安装包"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".whl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("路径\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);