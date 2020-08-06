---
sidebar: auto
---

# 自定义表情包

::: tip 提示
使用时，请保证所有配置文件在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程

### 下载
直接在 [releases](https://github.com/fz6m/opqqq-plugin/releases) 中下载该插件，亦或 clone 等方式打包下载本项目。

注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。

### 安装依赖
安装本插件依赖：
```bash
    pip install pillow
    pip install qrcode
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

### 使用方法
在群内可以使用如下指令：
```yml
    # 制造表情包
    xxx.jpg
    XXX.JPG

    # 切换自己的表情包底图
    img 表情包别名

    # 查看表情包列表
    img list
```
注：表情包列表将以自动制作的二维码图片形式呈现，扫码后可查看已经配置的表情包有哪些，如想自定义该图片或放弃使用查询功能，请参照后文配置。


## 自定义方法

在 `resources/image-custom` 下有 `image_data` 文件夹，也就是 自定义表情包资源 存放的文件夹，该文件夹和基于 nonebot 开发的 [本插件](https://github.com/fz6m/nonebot-plugin/tree/master/CQimage) 完全兼容，包括内部配置结构完全一致，使用本插件的 nonebot 用户可以无代价的将资源转移后即开即用。

### 配置结构
1. 在 `resources/image-custom/image_data` 中，每个表情包拥有自己独立的文件夹，我们先取一个标识，以便进行配置，这里假设该表情名为 `stamp`。 
2. 在 `image_data` 内建立一个名为 `stamp` 的文件夹，之后在 `stamp` 内放入你的表情包图片（并命名为 `stamp.jpg`），并新建配置 `config.ini` ：
    ```text
        {
            "name":"stamp",
            "font_max":220,
            "font_size":40,
            "font_center_x":125,
            "font_center_y":220,
            "color":"black",
            "font_sub":5
        }
    ```
    参数 | 说明
    :-: | :-
    name | 表情图文件名
    font_max | 表情图内添加文字可能的最大长度，一般为 `图片宽度 - 40` (大图) 或 `图片宽度 - 20` (小图)
    font_size | 表情图内添加文字的尺寸
    font_center_x | 表情图内添加文字的中心点x位，一般为 `图片宽度 / 2`
    font_center_y | 表情图内添加文字的中心点y位（由上至下递增）
    color | 表情图内添加文字的颜色，一般取 `black` / `white`
    font_sub | 控制文字大小衰减的档位，一般为 `5`（更精细也可以）

    注意：
    1. 建议使用 `.jpg` 格式图片，`.png` 图片渲染后太大。
    2. **三个一样**：表情包自己的文件夹名、表情文件名、配置文件内 `name` 属性值，三个地方应该保持一致。
3. 为了更好的选定配置 `config.ini` 内的参数取值，一种参考图如下：
   
    <img :src="$withBase('/image-custom-example.jpg')" class="my-img" width='70%' />

    注：看不了图说明 DNS 被污染了，请配置 [Github Hosts](https://blog.csdn.net/qq_21567385/article/details/105951488) 或者开启代理。
4. 在画图工具内编辑图片，可以在左下角看到鼠标相应的像素点与图片尺寸，比划一下，我们就可以这样得到（这只是一个例子）：
    参数 | 说明
    :-: | :-
    font_max | 左右边长度（一般为 10-20），之后用宽度扣减 2 倍
    font_size | 比划一下白色上限和下限，y 值相差
    font_center_x | 直接图像宽度除 2
    font_center_y | 刚刚我们比划了白色区域上下边界了，y 相加除 2 即可
    font_sub | 直接填 5

### 添加别名
配置好表情包自己的文件夹后，往 `resources/image-custom/image_data/bieming/name.ini` 内添加面向用户友好的别名，按行标识，格式如下：
```yml
    别名 表情包标识
```
别名是指用户切换时使用的，一般为汉字。

表情包标识即为刚刚建立的表情包文件夹名。


## 配置项

你可以在 `plugins/bot_image_custom.py` 文件开头找到如下配置：
```python
    # 屏蔽群 例：[12345678, 87654321]
    blockGroupNumber = []
    # 服务器配置
    host = 'http://127.0.0.1'
    port = 8888
    # 是否自动制作表情列表二维码 默认是 
    # 表情太多时二维码可能装不下扫不出来，请自行制作或者删去 resources/list.jpg 即关闭查询表情列表图（qrListOpen 也要关闭）
    qrListOpen = True
    # 表情包字体
    fontPath = f'{RESOURCES_BASE_PATH}/font/simhei.ttf'
```
一般情况不需要修改。

### 屏蔽群
当您想屏蔽哪个群时，可以在本插件内配置屏蔽使用本插件的群号，例：
```python
    blockGroupNumber = [12345678, 87654321]
```

### 自定义表情包列表

只要在 `resources/image-custom/image_data/bieming/name.ini` 配置了表情包，当使用 `img list` 查询命令时，默认会生成带表情包别名信息的二维码，用户扫码即可查看所有可用的表情包名字。

如果您需要自定义该图片，请将 `qrListOpen` 设为 `False` 即关闭自动生成，同时在 `resources/image-custom/list.jpg` 下提供同名图片文件。

如果您不需要此查询功能，请将 `qrListOpen` 设为 `False` 即关闭自动生成，同时删去 `resources/image-custom/list.jpg` 。

## 文件夹介绍

### `resources/image-custom` 文件夹
放置该插件资源的位置。

### `resources/font` 文件夹
在 linux 系统上没有中文字体，为减少安装成本，将使用我们自己提供的字体文件（默认为 `resources/font/simhei.ttf` 即黑体）。

您也可以在 `plugins/bot_image_custom.py` 内的第 `16` 行修改该字体：
```python
# 表情包字体
    fontPath = f'{RESOURCES_BASE_PATH}/font/simhei.ttf'
```

## 其他

您可以安装 `ujson` 依赖以加速 json 读取的速度：
```bash
    pip install ujson
```
注：如果安装 `ujson` 依赖失败，你可以放弃安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```