---
sidebar: auto
---

# 5000 choyen 字体生成器

*Version: beta*

## 使用前注意

### 5000 choyen 字体是什么

详见 [5000choyen-server](https://github.com/fz6m/5000choyen-server) ，是一种特殊风格的字体。

利用这个 nodejs 服务端，可以在本地请求生成该字体的图片，再通过 python 转发。

### 我有更便捷的选择吗

#### 为什么要使用 nodejs 作为服务端

因为核心绘图部分是使用网页中的 canvas 进行层叠渐变渲染堆出来的，所以需要使用 JavaScript 作为编程语言生成这种字体的图片。

#### 使用 python 原生不可以实现吗

可以。但是无法完全复现一样具有冲击的效果，所以此路否决。

#### 使用此功能我需要承担什么成本

需要在本地安装好 nodejs 环境，并部署好该项目。

每次调用时，python 会去本地请求该服务端的地址，并将生成的图片获取到本地保存，再发往机器人主端外送消息。

由 v8 引擎驱动的 nodejs 是很快的（ 比 python 要快 ），所以从请求获取图片再到发送，整个过程是非常快的。

## 部署

### 服务端部署

#### nodejs 环境

我们默认你的服务端具有了 nodejs 环境，你可以通过搜索引擎查找如何安装。

一个便捷的方法：如果你使用了宝塔服务面板，可以在 软件商店 > 安装 PM2 管理器，之后会附带安装好 nodejs 环境。

#### 拉取项目

通过 `git clone` 或者从 [项目处](https://github.com/fz6m/5000choyen-server) 下载压缩包的方式，将服务端下载到本地。

```bash
    git clone https://github.com/fz6m/5000choyen-server.git
```

#### 安装依赖

之后进入该项目根目录，执行依赖安装：

```bash
    # 设定 npm 下载源为 taobao 源，否则下载会很卡
    npm config set registry https://registry.npm.taobao.org
    # 安装 yarn 
    npm install -g yarn

    # 设定 yarn 下载源为 taobao 源，否则下载会很卡
    yarn config set registry https://registry.npm.taobao.org
    # 使用 yarn 安装依赖
    yarn
```

注：假如最后一步使用 `yarn` 命令安装依赖卡住很久不动，或者失败，请使用如下命令安装依赖

```bash
    # 使用 yarn 安装出问题时，改为编译安装依赖
    npm_config_build_from_source=true yarn install
```

假如你还有问题，一般是在比较旧的服务器上安装 `canvas` 这个依赖时发生了问题，你可以选择：

1. 我对 nodejs 有一定了解，可以自行通过搜索解决安装 `canvas` 失败的问题

2. 我对 nodejs 没有了解，也不想解决，请放弃使用此插件

#### 启动项目

##### 使用 tmux 启动

tmux 是一个多窗口隔离管理工具，如果你并不熟悉，可以先学习教程：[阮一峰 Tmux 使用教程](http://www.ruanyifeng.com/blog/2019/10/tmux.html)

为了保证该服务端在后台运行，新建一个 tmux ，并跳转到已经安装好依赖的该项目根目录下，执行：

```bash
    # 启动项目
    yarn server
```

之后 `ctrl + b + d` 分离 tmux 会话，大功告成。

##### 使用 pm2 启动

如果你追求更好的服务稳定性，可以采用 pm2 启动。

1. 先在项目根目录新建一个 `run.sh`

    ```bash
        yarn server
    ```

2. 赋予该脚本运行权限，之后使用 pm2 启动该脚本即可

### python 插件部署

#### 新建插件

服务端部署好后，在机器人插件目录的 `plugins` 文件夹下新建该 `bot_5000_choyen.py` 插件：

```python
# -*- coding:utf-8 -*-

import base64
import os
from enum import Enum
from io import BytesIO

import httpx
from botoy import Action, GroupMsg
from botoy.decorators import ignore_botself
from botoy.collection import MsgTypes
from PIL import Image

# ==========================================
RESOURCES_BASE_PATH = "./resources/5000-choyen"
# ==========================================

bot = Action(
    # 注意更换您的 bot.py 文件为最新
    int(os.getenv("BOTQQ")),
)


@ignore_botself
def receive_group_msg(ctx: GroupMsg):
    userGroup = ctx.FromGroupId

    if not Tools.textOnly(ctx.MsgType):
        return

    userQQ = ctx.FromUserId
    msg = ctx.Content

    mainProgram(msg, bot, userQQ, userGroup)


class Status(Enum):

    SUCCESS = "_success"

    FAILURE = "_failure"

class Tools:
    @staticmethod
    def textOnly(msgType):
        return msgType == MsgTypes.TextMsg

    @staticmethod
    def readPictureFile(picPath):
        if not os.path.exists(picPath):
            return Status.FAILURE
        with open(picPath, "rb") as f:
            return f.read()

    @classmethod
    def base64conversion(cls, picPath):
        picByte = cls.readPictureFile(picPath)
        if picByte == Status.FAILURE:
            raise Exception("图片文件不存在！")
        return str(base64.b64encode(picByte), encoding="utf-8")

    @classmethod
    def sendPictures(
        cls, userGroup, picPath, bot: Action, standardization=True, content="", atUser=0
    ):
        if standardization:
            content = str(content) + "[PICFLAG]"
        bot.sendGroupPic(
            userGroup,
            content=content,
            picBase64Buf=cls.base64conversion(picPath),
            atUser=atUser,
        )

    @staticmethod
    def checkFolder(dir):
        if not os.path.exists(dir):
            os.makedirs(dir)

class Network:

    DEFAULT_HEADERS = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36"
    }

    @classmethod
    def getBytes(cls, url, headers="", timeout=10):
        if headers == "":
            headers = cls.DEFAULT_HEADERS
        try:
            return httpx.get(url=url, headers=headers, timeout=timeout).read()
        except:
            return Status.FAILURE

def getPictures(url):
    img = Network.getBytes(url)
    return img

def mainProgram(msg, bot, userQQ, userGroup):
    try:
        msg_list = msg.split(' ')
        first_msg = msg_list[0]

        # 触发的第一个关键词
        if first_msg == '5000':
            length = len(msg_list)
            if length == 1:
                return
            # >= 2
            # set top
            top_text = msg_list[1]
            # set bottom
            try:
                bottom_text = msg_list[2]
            except:
                bottom_text = None
            # set offset
            try:
                offset = msg_list[3]
            except:
                offset = None

            # download
            url = f'http://127.0.0.1:4000/api/v1/gen?top={top_text}'
            if bottom_text:
                url += f'&bottom={bottom_text}'
            if offset:
                url += f'&offset={offset}'
            url += '&format=png'

            img = getPictures(url)

            resource_folder = RESOURCES_BASE_PATH
            Tools.checkFolder(resource_folder)

            cache_folder = f'{RESOURCES_BASE_PATH}/cache'
            Tools.checkFolder(cache_folder)

            save_path = f'{cache_folder}/{userQQ}.png'
            Image.open(BytesIO(img)).save(save_path)

            Tools.sendPictures(
                userGroup=userGroup, picPath=save_path, bot=bot
            )
    except:
        return
```

这段代码并没有提供在 `opqqq-plugin` 仓库中，需要你自己新建。

#### 安装依赖

```bash
    pip install httpx
    pip install pillow
```

注：如果您下载依赖太慢，可选用大清源加速，例：

```bash
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pillow
```

#### 使用插件

一切准备就绪，可以启动机器人通过如下命令使用：

```yml
    # 只有单行红字
    5000 单行文字
    # 上下两行文字
    5000 上部文字 下部文字
    # 第二行下部文字向右额外偏移 100 像素
    5000 上部文字 下部文字 100
```

## 自定义配置项

### 如何配置触发命令

请阅读上面的 python 插件脚本，稍微改一下判断条件的内容即可。

### 如何修改图片格式

默认发送 `png` 格式的图片，如果服务器带宽不够可以换为 `jpg` 格式，将请求 url 中的 `format` 参数换为 `format=jpg` 即可。

全部 url 请求参数可参见服务端说明：[5000choyen-server](https://github.com/fz6m/5000choyen-server)

## 其他

### 注意风控

假如内鬼经常制造一些带敏感内容的图片，风控风险会比较大。

一旦出现消息送不出去的情况，请立即停用机器人一段时间，并永远不再使用该插件！

### 安装过程问题太多搞不明白了

此插件使用成本较高，不适合小小白使用。