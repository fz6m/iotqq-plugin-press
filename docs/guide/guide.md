---
sidebar: auto
prev: /guide/manual
---

# 了解基础

::: tip 提示
由于 iotbot 更名为 opqbot，下文中提到的 opq 均与 iot 等同。
:::

本项目插件基于 opqqq 和 [opq-osc / botoy](https://github.com/opq-osc/botoy) SDK 开发，使用前确保该基础依赖已经安装；
```bash
    pip install botoy -i https://pypi.org/simple --upgrade
```

## 项目地址

opqqq：[OPQBOT / OPQ](https://github.com/OPQBOT/OPQ)

botoy：[opq-osc / botoy](https://github.com/opq-osc/botoy)

### 从旧版 sdk 升级

我们于 ***2021.04.27*** 从旧版 python 开发 sdk [xiyaowong / python--iotbot](https://github.com/xiyaowong/python--iotbot) 升级为 [opq-osc / botoy](https://github.com/opq-osc/botoy)。

具体变动和升级方法如下，这十分简单，并不会影响您的历史数据：

1. 取消 `.iotbot.json` 配置文件

2. 取消在 `bot.py` 内配置账号，现在全部收敛于 `botoy.json` ，在该文件内设定您的账号和 botoy 支持的相关配置

3. `plugins/*` 文件夹下的文件都发生了修改，您只需更换为最新版即可，`resources/*` 下的文件并不需要变动，这不影响您的任何数据


## 如何开发

如果你具备一定的开发能力，您可以使用新版 python sdk ：[opq-osc / botoy](https://github.com/opq-osc/botoy) 开发自己的机器人功能

## 从 nonebot-plugin 迁移

如果你是 [nonebot-plugin](https://github.com/fz6m/nonebot-plugin) 的用户，本项目插件与其配置完全一致，您只需将原来的配置文件放到新插件的相应资源位置即可低成本即开即用。