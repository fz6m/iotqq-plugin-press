---
sidebar: auto
---

# 可以爬了吗

## 部署流程

### 下载
直接在 [releases](https://github.com/fz6m/iotqq-plugin/releases) 中下载该插件，亦或 clone 等方式打包下载本项目。

注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。

### 安装依赖
安装本插件依赖：
```bash
    pip install httpx
    pip install pillow
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
你可以在群内发送如下指令之一触发该插件：
```yml
    # 触发爬命令
    爬 @群友
    @群友 爬

    # 触发丢命令
    丢 @群友
    @群友 丢

    # 等等……与丢、爬相关的关键词
```
触发相应命令后，即会回复相应的图片。

## 配置
### 触发命令
你可以在 `plugins/bot_throw_creep.py` 的第 13-14 行找到如下触发指令列表：
```python
    # 触发命令列表
    creepCommandList = ['爬', '爪巴', '给爷爬', '爬啊', '快爬']
    throwCommandList = ['丢', '我丢']
```
分别对应：

 - `creepCommandList`：爬的触发命令，只要消息中含有该列表中的指令同时 at 了人就会触发。
 - `throwCommandList`：丢的触发命令，只要消息中含有该列表中的指令同时 at 了人就会触发。

你可以对相应的指令列表进行增删修改。

### 爬的概率
你可以在 `plugins/bot_throw_creep.py` 的第 16 行找到爬的概率：
```python
    # 爬的概率 越大越容易爬 取值区间 [0, 100]
    creep_limit = 80
```

## 插件原作者
感谢该插件提议原作者：[clague](https://github.com/clague)