(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"从零开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从零开始"}},[a._v("#")]),a._v(" 从零开始")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("由于 iotbot 更名为 opqbot，下文中提到的 opq 均与 iot 等同。")])]),a._v(" "),s("h2",{attrs:{id:"下载运行包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载运行包"}},[a._v("#")]),a._v(" 下载运行包")]),a._v(" "),s("p",[a._v("你可以从 "),s("a",{attrs:{href:"https://github.com/OPQBOT/OPQ",target:"_blank",rel:"noopener noreferrer"}},[a._v("OPQ"),s("OutboundLink")],1),a._v(" 官方项目等渠道获取下载安装包，这里建议使用 amd64 在 ubuntu 上运行（或者 centos ）。")]),a._v(" "),s("p",[a._v("注： windows 不能使用本插件。")]),a._v(" "),s("p",[a._v("附：")]),a._v(" "),s("ul",[s("li",[a._v("最新版 opq 运行包（不一定实时更新）："),s("a",{attrs:{href:"https://files.gitter.im/5f27939ed73408ce4feb3112/ygKm/OPQBot_3.0.8_linux_amd64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("OPQBot_3.0.8_linux_amd64.tar.gz"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("树莓派版本请自行寻找。")])]),a._v(" "),s("h2",{attrs:{id:"安装管理面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装管理面板"}},[a._v("#")]),a._v(" 安装管理面板")]),a._v(" "),s("h3",{attrs:{id:"认识宝塔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识宝塔"}},[a._v("#")]),a._v(" 认识宝塔")]),a._v(" "),s("p",[a._v("建议小白安装可视化的 linux 宝塔管理面板。")]),a._v(" "),s("p",[a._v("宝塔 linux 管理面板："),s("a",{attrs:{href:"https://www.bt.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方网站"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("你可以在 官网 > 立即安装 > Ubuntu/Deepin安装命令 找到：")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/install.jpg")}}),a._v(" "),s("p",[a._v("注：如图片不显示请开启代理。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" install.sh\n")])])]),s("p",[a._v("注：不保证本指令实时更新，请以官网安装指令为准。")]),a._v(" "),s("h3",{attrs:{id:"登录面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录面板"}},[a._v("#")]),a._v(" 登录面板")]),a._v(" "),s("p",[a._v("面板安装完成后，会显示登录地址，以及登录用户和密码，请参照进行登录，如果访问不了，请放通安全组。")]),a._v(" "),s("h4",{attrs:{id:"安全组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全组"}},[a._v("#")]),a._v(" 安全组")]),a._v(" "),s("p",[a._v("在服务器提供商管理后台进行放通，假如你是用的是阿里云，那就应该在阿里云的官网管理实例那边设置安全组。")]),a._v(" "),s("p",[a._v("安全组如果不会配置的，请自行百度，小白不是很懂的话放通所有端口即可。")]),a._v(" "),s("h3",{attrs:{id:"更换端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换端口"}},[a._v("#")]),a._v(" 更换端口")]),a._v(" "),s("p",[a._v("由于我们机器人默认运行在 "),s("code",[a._v("8888")]),a._v(" 端口，而宝塔也是，所以需要更换宝塔面板端口，在"),s("strong",[a._v("面板设置")]),a._v("内即可更换。")]),a._v(" "),s("h3",{attrs:{id:"管理员权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理员权限"}},[a._v("#")]),a._v(" 管理员权限")]),a._v(" "),s("p",[a._v("在 ubuntu 上运行请切换至 root 管理员后再使用命令行，防止权限不够导致不必要的报错。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换至 root 用户")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" -i\n")])])]),s("p",[a._v("注：如果因为各种原因切换失败，请自行百度寻找其他切换至 root 的方法。")]),a._v(" "),s("h3",{attrs:{id:"中断程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中断程序"}},[a._v("#")]),a._v(" 中断程序")]),a._v(" "),s("p",[a._v("在进程中，可以使用 "),s("code",[a._v("ctrl+c")]),a._v(" 中断当前进程，小白不知道怎么退出就这么按。")]),a._v(" "),s("h2",{attrs:{id:"部署机器人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署机器人"}},[a._v("#")]),a._v(" 部署机器人")]),a._v(" "),s("h3",{attrs:{id:"上传运行包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传运行包"}},[a._v("#")]),a._v(" 上传运行包")]),a._v(" "),s("h4",{attrs:{id:"创建文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[a._v("#")]),a._v(" 创建文件夹")]),a._v(" "),s("p",[a._v("通过 宝塔面板 > 文件 上传刚刚下载的运行包到服务器，这里假设上传到 "),s("code",[a._v("/root/opqqq")]),a._v(" 这个文件夹内：")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/makedir.jpg")}}),a._v(" "),s("p",[a._v("可通过以下命令直接切换到该文件夹：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n")])])]),s("p",[a._v("注：对于 root 用户来说， "),s("code",[a._v("~")]),a._v(" 即指代 "),s("code",[a._v("/root")]),a._v(" 文件夹。")]),a._v(" "),s("h4",{attrs:{id:"使用上传功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用上传功能"}},[a._v("#")]),a._v(" 使用上传功能")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/upload.jpg")}}),a._v(" "),s("p",[a._v("都是可视化面板，自行上传即可，上传完毕后解压。")]),a._v(" "),s("h3",{attrs:{id:"申请-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请-token"}},[a._v("#")]),a._v(" 申请 token")]),a._v(" "),s("p",[a._v("在 "),s("a",{attrs:{href:"https://developer.gitter.im/docs/welcome",target:"_blank",rel:"noopener noreferrer"}},[a._v("gitter.im"),s("OutboundLink")],1),a._v(" 内申请一个 token ，可以通过：")]),a._v(" "),s("ol",[s("li",[a._v("github 账号")]),a._v(" "),s("li",[a._v("twitter 账号")])]),a._v(" "),s("p",[a._v("两种常用方式登录，不需要其他条件，有账号即可申请，如果 github 或者 twitter 的账号你都没有，请自行注册一个。")]),a._v(" "),s("p",[a._v("登录后就可以看到自己的 token 了：")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/token.jpg")}}),a._v(" "),s("h4",{attrs:{id:"配置-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-token"}},[a._v("#")]),a._v(" 配置 token")]),a._v(" "),s("p",[a._v("返回管理面板，在解压好的文件夹内有一个 "),s("code",[a._v("CoreConf.conf")]),a._v(" 配置文件，打开填写自己的 token ：")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/input-token.jpg")}}),a._v(" "),s("p",[a._v("填写完毕后保存关闭。")]),a._v(" "),s("h3",{attrs:{id:"运行机器人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行机器人"}},[a._v("#")]),a._v(" 运行机器人")]),a._v(" "),s("p",[a._v("先切换到该目录内：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/opqqq/OPQBot_3.0.8_linux_amd64\n")])])]),s("p",[a._v("注：后半部分请根据你解压后的文件名切换，这只是一个例子。")]),a._v(" "),s("h4",{attrs:{id:"试运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#试运行"}},[a._v("#")]),a._v(" 试运行")]),a._v(" "),s("p",[a._v("运行机器人：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    ./OPQBot\n")])])]),s("p",[a._v("看到 everything 成功即可进行登录。")]),a._v(" "),s("p",[a._v("访问："),s("code",[a._v("http://host:port/v1/Login/GetQRcode")]),a._v(" 进行扫码登录，其中 "),s("code",[a._v("host")]),a._v(" 是你服务器的 ip ， "),s("code",[a._v("port")]),a._v(" 是你配置的端口，如果你没有修改，这里默认是 "),s("code",[a._v("8888")]),a._v("。")]),a._v(" "),s("p",[a._v("查看机器人状态：通过访问 "),s("code",[a._v("http://host:port/v1/ClusterInfo")]),a._v(" 查看和刚刚启动的控制台提示确认机器人已经成功登录。")]),a._v(" "),s("p",[a._v("如果没登录上，请稍等片刻控制台不在提示登录尝试信息后再扫码登录一次。")]),a._v(" "),s("h4",{attrs:{id:"正式运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正式运行"}},[a._v("#")]),a._v(" 正式运行")]),a._v(" "),s("p",[a._v("确认无误后，你可以通过 "),s("code",[a._v("nohup")]),a._v(" 后台方式运行机器人：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" ./OPQBot "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("会在当前程序目录自动产生一个 "),s("code",[a._v("nohup.out")]),a._v(" 日志文件，有关日志查看，请看后文介绍。")]),a._v(" "),s("h2",{attrs:{id:"部署插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署插件"}},[a._v("#")]),a._v(" 部署插件")]),a._v(" "),s("h3",{attrs:{id:"部署-python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-python"}},[a._v("#")]),a._v(" 部署 Python")]),a._v(" "),s("p",[a._v("我们之前建议使用宝塔管理面板，他是基于 Python 的，也就是说我们使用它的 Python 即可，不需要自己再安装。")]),a._v(" "),s("p",[a._v("另外，我们建议使用 ubuntu 系统，宝塔对于 ubuntu 系统使用的是 3.7.8 版本的 Python ，而对于 centos 使用的是 2.x.x 的 Python 。")]),a._v(" "),s("ul",[s("li",[a._v("ubuntu 系统：请找到宝塔的 Python bin ，一般为 "),s("code",[a._v("/www/server/panel/pyenv/bin/python3")]),a._v(" ，你可以进到 "),s("code",[a._v("/www/server/panel/pyenv/bin")]),a._v(" 内查看是否含有 "),s("code",[a._v("python3")]),a._v(" 这个文件。")]),a._v(" "),s("li",[a._v("centos 系统：请在 软件商店 安装 Python 项目管理器，之后安装 3.7+ 的 Python ，再使用 pyenv 切换 Python 版本："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    pyenv "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" 你刚刚下载的版本号\n")])])]),a._v("如果还不知道刚刚下载的版本号，你可以查看本机都有哪些 Python 版本："),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    pyenv versions\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("h4",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[a._v("#")]),a._v(" ubuntu")]),a._v(" "),s("p",[a._v("请使用如下方式安装依赖：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    /www/server/panel/pyenv/bin/pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" 包名\n")])])]),s("h4",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[a._v("#")]),a._v(" centos")]),a._v(" "),s("p",[a._v("我们刚刚使用 pyenv 已经切换好了全局 python 版本，你可以确认：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    python --version\n")])])]),s("p",[a._v("之后我们直接使用如下方式安装依赖即可：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" 包名\n")])])]),s("h3",{attrs:{id:"启动插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动插件"}},[a._v("#")]),a._v(" 启动插件")]),a._v(" "),s("p",[a._v("按照插件教程将插件：")]),a._v(" "),s("ol",[s("li",[a._v("打包下载好，上传到服务器")]),a._v(" "),s("li",[a._v("安装需要的依赖")]),a._v(" "),s("li",[a._v("切换到（cd）该目录")]),a._v(" "),s("li",[a._v("运行插件主程序 "),s("code",[a._v("bot.py")])])]),a._v(" "),s("p",[a._v("ubuntu 运行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 试运行")]),a._v("\n    /www/server/panel/pyenv/bin/python3 bot.py\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 后台")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" /www/server/panel/pyenv/bin/python3 bot.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("centos 运行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 试运行")]),a._v("\n    python bot.py\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 后台")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" python bot.py "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("后台运行的会在当前目录生成一个 "),s("code",[a._v("nohup.out")]),a._v(" 日志文件，如何查看请看后文介绍。")]),a._v(" "),s("h2",{attrs:{id:"进一步认识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进一步认识"}},[a._v("#")]),a._v(" 进一步认识")]),a._v(" "),s("h3",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[a._v("#")]),a._v(" token")]),a._v(" "),s("h4",{attrs:{id:"自动登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动登录"}},[a._v("#")]),a._v(" 自动登录")]),a._v(" "),s("p",[a._v("一个 token 绑定一个账号，一旦第一次扫码登录了，第二次启动程序就会自动登录，不需要再扫码了。")]),a._v(" "),s("h4",{attrs:{id:"使用其他账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用其他账号"}},[a._v("#")]),a._v(" 使用其他账号")]),a._v(" "),s("p",[a._v("如果要使用其他账号，请再去申请一个新 token ，用一份从压缩包（指最初下载的运行包）解压出来新的文件夹再进行配置，因为使用过的文件夹会被污染。")]),a._v(" "),s("h4",{attrs:{id:"取消自动登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消自动登录"}},[a._v("#")]),a._v(" 取消自动登录")]),a._v(" "),s("p",[a._v("如果你要放弃使用，请在 手机端 QQ > 设备管理 取消机器人设备，这样就不会再自动登陆了。")]),a._v(" "),s("h3",{attrs:{id:"进程查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程查看"}},[a._v("#")]),a._v(" 进程查看")]),a._v(" "),s("p",[a._v("我们在上文提到了使用 "),s("code",[a._v("nohup")]),a._v(" 进行后台运行，我们可以使用 "),s("code",[a._v("htop")]),a._v(" 查看进程运行情况：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("htop")]),a._v("\n")])])]),s("p",[a._v("之后就可以查看到该进程的资源占用情况了，按 F10 退出。")]),a._v(" "),s("p",[a._v("注：如果是 centos ，可能没有安装 htop ，如果需要使用，请自行安装。")]),a._v(" "),s("h3",{attrs:{id:"日志查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志查看"}},[a._v("#")]),a._v(" 日志查看")]),a._v(" "),s("p",[a._v("我们在上文提到了使用 "),s("code",[a._v("nohup")]),a._v(" 进行后台运行，我们可以用如下方式查看我们的日志。")]),a._v(" "),s("h4",{attrs:{id:"宝塔控制面板查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宝塔控制面板查看"}},[a._v("#")]),a._v(" 宝塔控制面板查看")]),a._v(" "),s("p",[a._v("直接在宝塔内查看文件即可，但是宝塔不支持查看大文件，超过 3 M 后即不支持打开。")]),a._v(" "),s("h4",{attrs:{id:"tail-查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail-查看"}},[a._v("#")]),a._v(" tail 查看")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("tail")]),a._v(" 命令查看实时日志：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f nohup.out\n")])])]),s("p",[a._v("查看最后 10 行日志：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" nohup.out\n")])])]),s("h4",{attrs:{id:"cat-查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat-查看"}},[a._v("#")]),a._v(" cat 查看")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("cat")]),a._v(" 命令查看全部日志：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" nohup.out\n")])])]),s("p",[a._v("注意太多可能会爆炸，不建议使用")]),a._v(" "),s("h4",{attrs:{id:"日志定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志定位"}},[a._v("#")]),a._v(" 日志定位")]),a._v(" "),s("p",[a._v("先找到这条消息的行数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" nohup.out "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"关键词"')]),a._v("\n")])])]),s("p",[a._v("通过 "),s("code",[a._v("tail")]),a._v(" 展示文件最后 1000 行，并通过 "),s("code",[a._v("grep")]),a._v(" 搜索含 "),s("code",[a._v("关键词")]),a._v(" 的日志，这里的 "),s("code",[a._v("关键词")]),a._v(" 可以是任意内容，比如用户名，账号，群组名，消息关键词等。"),s("code",[a._v("-n")]),a._v(" 表示显示行号。")]),a._v(" "),s("p",[a._v("再找到该行之后的消息，假设该消息在 11141 行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" -n nohup.out "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -n +11141 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("\n")])])]),s("p",[a._v("用 "),s("code",[a._v("cat")]),a._v(" 取全部日志，再使用 "),s("code",[a._v("tail")]),a._v(" 查看 1234 行后的所有日志，再用 "),s("code",[a._v("head")]),a._v(" 命令取 1234 行后的前 30 行：")]),a._v(" "),s("img",{staticClass:"my-img",attrs:{src:a.$withBase("/manual/error.jpg")}}),a._v(" "),s("p",[a._v("如此一来，就发现了错误位置。")]),a._v(" "),s("h3",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),s("p",[a._v("我们部署在服务器上的机器人，如果其他人知道你服务器的 ip 是很危险的，他可以通过相应的网址查看到你的控制台和机器人信息，如果需要，可以在 宝塔面板 > 安全 内关闭机器人部署的端口（默认是 "),s("code",[a._v("8888")]),a._v("）。")]),a._v(" "),s("h3",{attrs:{id:"宝塔面板配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板配置"}},[a._v("#")]),a._v(" 宝塔面板配置")]),a._v(" "),s("p",[a._v("可视化面板很简单，请自行探索和百度，密码忘了请使用 shell 工具链接服务器后执行 "),s("code",[a._v("bt")]),a._v(" 命令修改：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    bt\n")])])]),s("h2",{attrs:{id:"学到更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学到更多"}},[a._v("#")]),a._v(" 学到更多")]),a._v(" "),s("h3",{attrs:{id:"tmux-管理进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tmux-管理进程"}},[a._v("#")]),a._v(" tmux 管理进程")]),a._v(" "),s("p",[a._v("如果使用 "),s("code",[a._v("nohup")]),a._v(" 出现问题，可以使用 "),s("code",[a._v("tmux")]),a._v(" 进行多窗口隔离管理。")]),a._v(" "),s("p",[a._v("现在你已经是一个熟练的 linux 使用者了，请自行百度学习。")]),a._v(" "),s("p",[a._v("推荐："),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/10/tmux.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("阮一峰 Tmux 使用教程"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"使用-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker"}},[a._v("#")]),a._v(" 使用 docker")]),a._v(" "),s("h4",{attrs:{id:"基础镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础镜像"}},[a._v("#")]),a._v(" 基础镜像")]),a._v(" "),s("p",[a._v("在使用之前先构建一个基础镜像环境 "),s("code",[a._v("Dockerfile")]),a._v(" ：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[a._v("    FROM ubuntu\n\n    RUN apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("get update "),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("&&")]),a._v(" apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("get install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y wget\n")])])]),s("p",[a._v("构建：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    docker build --no-cache -t opqqq:base "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h4",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),s("p",[a._v("将你本地机器人目录挂载到容器里即可：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    docker run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        -v /opqqq/OPQBot_3.0.8_linux_amd64:/opq "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        --name opqqq "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        -w /opq "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),a._v(":8888 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        -d opqqq:base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        ./OPQBot\n")])])]),s("h4",{attrs:{id:"内存监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存监控"}},[a._v("#")]),a._v(" 内存监控")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 找到 pid")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" OPQBot\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 监控")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" -d "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -p "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h4",{attrs:{id:"日志监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志监控"}},[a._v("#")]),a._v(" 日志监控")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    docker logs -tf opqqq --tail "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);