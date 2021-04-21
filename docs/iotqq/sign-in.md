---
sidebar: auto
---

# Strings 签到

*Version: 1.1*

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

### 安装依赖
安装本插件依赖：
```bash
    pip install httpx
    pip install pillow
    pip install python-dateutil
```
注：如果您下载依赖太慢，可选用大清源加速，例：
```bash
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pillow
```

### 添加账号
在下载的 `bot.py` 主程序内，你需要修改 `bot_qq` 为自己的机器人账号：
```python
    bot_qq = 12345678
```

## 开始使用
你可以在群内发送如下指令触发该插件：
```
    签到
```

## 配置
### 触发命令
你可以在 `plugins/bot_sign_in.py` 的第 9 行找到如下触发指令列表：
```python
    # 触发命令列表
    # 例：['签到', '早']
    commandList = ['签到']
```

### 一言
本插件一言功能感谢 `https://v1.hitokoto.cn/` 提供的 api 接口。

#### 一言存档
为防止网络问题或一言网站倒闭，历史获取到的一言均会存档于 `resources/sign-in/hitokoto/cache/archive.json` 以备出现问题时自动调档。

#### 一言开关
你可以在 `plugins/bot_sign_in.py` 的第 15 行找到一言开关：
```python
    # 是否打开一言，若不打开，默认显示 noHitokoto
    hitokotoOpen = True
```
当网络存在问题或一言网站倒闭时，你可以关闭一言。

#### 一言屏蔽
你可以在 `plugins/bot_sign_in.py` 的第 19 行找到一言屏蔽列表：
```python
    # 一言黑名单，含有该内容即重新获取
    hitokotoBlacklist = ['历史的发展', '没有调查']
```
当一言出现黑名单内容时，将重新获取 `1` 次，重新获取后仍为黑名单内容的话，将采用默认一言。

你可以借此屏蔽掉政治色彩强烈的一言，给予群友更好的体验。

#### 默认一言
你可以在 `plugins/bot_sign_in.py` 的第 17 行找到默认一言：
```python
    noHitokoto = '今天也要元气满满哦~'
```
以下几种情况将采用默认一言：

 * 当一言功能关闭时
 * 当两次获取一言都在黑名单时
 * 当网络超时或一言网站倒闭，同时调取本地存档失败时

### 出图设定
#### 出图质量
你可以在 `plugins/bot_sign_in.py` 的第 13 行找到出图质量设定：
```python
    highQuality = True
```
 * `True` ：`png` 格式出图，单张在 400 KB 左右，色彩鲜艳。
 * `False` ：`jpg` 格式出图，单张在 100 KB 以内，少许模糊，并丢失 A 通道透明度 `190` 的效果。

#### 出图参数
你可以在 `plugins/bot_sign_in.py` 的第 275-299 行找到出图参数设定，一般情况下，你不需要改动他们。

参数|默认值|说明
:-:|:-:|:-
`magicCirclePlus`     |  `30`        |  魔法圆尺寸 - 头像尺寸
`avatarVerticalOffset`|  `50`         |  头像在 `y/2` 位置向上额外偏移的值
`textBaseMapSize`     |  `(540, 160)` |  文字区域 `(0, 0, 0, 190)` 颜色的尺寸大小
`topPositionOfTextBaseMap`|`425`      |  文字区域上边 `y` 坐标位置
`textBaseMapLeftPosition`| `-`      |  文字最左边的限制，文字不能在此坐标左侧
`fontAttenuation`       | `2`       |  文字字号衰减的大小
`minimumFontLimit`| `10`            |  文字的最小字号，若文字太长使得衰减小于此字号，不会出图
`infoCoordinatesY`| `-`               |  文字区域每行文字的 `y` 中心坐标
`infoFontSize`      | `28, 28, 25, 25`| 文字区域每行文字的初始字号
`infoFontName`| `-` | 文字区域文字的字体

注： `-` 表示与其他值动态相关或纯文本。

## 其他

您可以安装 `ujson` 依赖以加速 json 读取的速度：
```bash
    pip install ujson
```
注：如果安装 `ujson` 依赖失败，你可以放弃安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 插件原作者
感谢该插件原作者：[jinserrr](https://github.com/jinserrr)