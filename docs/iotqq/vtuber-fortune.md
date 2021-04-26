---
sidebar: auto
---

# Vtuber / Pcr / 原神 运势

*Version: 1.5*

::: tip 提示
使用时，请保证所有配置文件在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程

### 安装 SDK
确保你已经安装了基础 [SDK](../guide/guide.md) 。

### 下载
直接在 [releases](https://github.com/opq-osc/opqqq-plugin/releases) 中下载该插件，亦或 clone 等方式打包下载本项目。

注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。

### 版本说明

本插件自 *v1.3* 开始，有 vtuber / pcr（プリンセスコネクト！Re：Dive）/ 原神（genshin） 三个版本。

自 hololive 发布敏感言论后，我们建议您使用 pcr 或 原神 版本，您可以在此查看 [无损迁移](#从-vtuber-版本迁移) 方法。

### 安装依赖
安装本插件依赖：
```bash
    pip install python-dateutil
    pip install pillow
```
注：如果您下载依赖太慢，可选用大清源加速，例：
```bash
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pillow
```

### 添加账号
在根目录 `botoy.json` 配置文件夹内，你需要做如下配置：
```json
    {
        "qq": 0, // 1. 修改为你的机器人账号
        "host": "http://127.0.0.1",
        "port": 8888, // 2. 修改为你机器人启动的端口，默认没有修改过的话，就是 8888
        "group_blacklist": [],
        "friend_blacklist": [],
        "blocked_users": [],
        "webhook": false,
        "webhook_post_url": "http://127.0.0.1:5000",
        "webhook_timeout": 20
    }
```

## 开始使用
你可以在群内发送如下指令之一触发该插件：
```yml
    # all version
    今日人品
    今日运势
    抽签
    人品
    运势

    # vtuber version
    小狐狸签
    吹雪签

    # pcr version
    xcw签
    炼签
    kkr签
    妈签
    kyaru签
    臭鼬签

    # genshin version
    可莉签
    可丽签
    哒哒哒签
    刻晴签
    卢姥爷签
    迪卢克签
    芭芭拉签
    巴啦啦签
    芭拉拉签
    七七签
```
当使用特定命令时，对应固定底图：

#### vtuber version

 - `小狐狸签` / `吹雪签` ：底图固定为白上吹雪

#### pcr version

 - `xcw签` / `炼签` ：小仓唯

 - `kkr签` / `妈签` ：可可萝

 - `kyaru签` / `臭鼬签` ：凯露

#### genshin version

 - `可莉签` / `可丽签` / `哒哒哒签` ：可莉

 - `刻晴签` ：刻晴

 - `卢姥爷签` / `迪卢克签` ：迪卢克

 - `芭芭拉签` / `巴啦啦签` / `芭拉拉签` ：芭芭拉

 - `七七签` ：七七

## 配置

### 触发命令
你可以在 `plugins/bot_vtuber_fortune.py` / `plugins/bot_pcr_fortune.py` / `plugins/bot_genshin_fortune.py` 的第 13 行找到如下触发指令列表：
```python
    # 触发命令列表 - vtuber version
    commandList = ['今日人品', '今日运势', '抽签', '人品', '运势', '小狐狸签', '吹雪签']

    # 触发命令列表 - pcr version
    commandList = [
        '今日人品', '今日运势', '抽签', '人品', '运势', 
        'kkr签', '妈签',
        'xcw签', '炼签',
        'kyaru签', '臭鼬签'
    ]

    # 触发命令列表 - genshin version
    commandList = [
        '今日人品', '今日运势', '抽签', '人品', '运势', 
        '可莉签', '可丽签', '哒哒哒签',
        '刻晴签',
        '卢姥爷签', '迪卢克签',
        '芭芭拉签', '巴啦啦签', '芭拉拉签',
        '七七签'
    ]
```

### 文案增改
你可以在 `resources/vtuber-fortune/fortune/copywriting.json` / `resources/pcr-fortune/fortune/copywriting.json` / `resources/genshin-fortune/fortune/copywriting.json` 找到所有运势文案内容，按照其已有格式添加结构即可：
```json
    {
        "good-luck": 10,
        "content": "曾经的努力和经验会成为他人眼中魅力的样子"
    }
```
其中：

`good-luck` ： 吉凶度 的编号，在同文件夹的 `resources/vtuber-fortune/fortune/goodLuck.json` / `resources/pcr-fortune/fortune/goodLuck.json` / `resources/genshin-fortune/fortune/goodLuck.json` 可以找到吉凶度设定，受字体限制，吉凶度是日语，请不要加入中文。

`content` ：运势文案内容，最多 36 字（包括汉字、空格、字母、标点，均占 1 个字）。

### 文案来源
插件自带了 175 条运势文案，来自于 hololive 早安系列第 3.13 - 3.29 期，如果想自己添加文案却没有头绪，可以参考其他期视频添加。

### 吉凶度
配置 吉凶度 设定的 `resources/vtuber-fortune/fortune/goodLuck.json` / `resources/pcr-fortune/fortune/goodLuck.json` / `resources/genshin-fortune/fortune/goodLuck.json` 文件，如果需要改动，要保证新增满足如下结构：
```json
    {
        "good-luck": 10,
        "name": "大吉"
    }
```
其中：

`name`：为吉凶度名称，最多 3 个汉字或假名，必须为日语。

`good-luck`：代表 吉凶度 代号，默认已经提供了 19 个吉凶度可供选择，其吉凶排序来自于 [wiki](https://ja.wikipedia.org/wiki/%E5%90%89%E5%87%B6) 百科。

要问为什么 吉 在 小吉 之后，我也不知道，实际使用时可以根据习惯来选择吉凶度，单独给予每一个吉凶度代号是为了方便不会日语的人，不需要在意其具体好坏。

一些吉凶度说明：

名称|含义
:-:|:-:
半吉|没有 大吉、中吉、小吉、吉 那么好，但是要比 末吉、末小吉 要好
末吉|这里的“末”指好运将要到来的意思，也就是现在并没有好坏，未来将会演变为 吉、小吉、中吉 等，当然也有可能变为 大吉
仕事運|“仕事”是工作的意思，也就是工作、职场上的好运
勉強運|“勉強”是学习的意思，也就是与学习、学业相关的运气
関係運|指人际关系方面的运气


## 从 vtuber 版本迁移

### pcr version

 pcr 版本只对以下文件做了更新：

 * `plugins/bot_vtuber_fortune.py` -> `plugins/bot_pcr_fortune.py` 

 * `resources/vtuber-fortune/img` -> `resources/pcr-fortune/img`

从而你只需将以上的 

1. `bot_vtuber_fortune.py` 替换为 `bot_pcr_fortune.py` 

2. `vtuber-fortune` 文件夹更名为 `pcr-fortune` 

3. `vtuber-fortune/img` 文件夹替换为 `pcr-fortune/img` 

即可无损迁移。

### genshin version

 原神 版本只对以下文件做了更新：

 * `plugins/bot_vtuber_fortune.py` -> `plugins/bot_genshin_fortune.py`

 * `resources/vtuber-fortune/img` -> `resources/genshin-fortune/img`

从而你只需将以上的 

1. `bot_vtuber_fortune.py` 替换为 `bot_genshin_fortune.py`

2. `vtuber-fortune` 文件夹更名为 `genshin-fortune`

3. `vtuber-fortune/img` 文件夹替换为 `genshin-fortune/img`

即可

## 其他

您可以安装 `ujson` 依赖以加速 json 读取的速度：
```bash
    pip install ujson
```
注：如果安装 `ujson` 依赖失败，你可以放弃安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 致谢

感谢 pcr 社区的米娜桑制作的 pcr 版本 fortune 静态资源。

感谢 [@Kouseki](https://github.com/Katou-Kouseki) 制作的 原神 版本 fortune 静态资源。