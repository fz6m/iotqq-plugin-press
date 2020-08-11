---
sidebar: auto
prev: /guide/manual
---

# 了解基础

::: tip 提示
由于 iotbot 更名为 opqbot，下文中提到的 opq 均与 iot 等同。
:::

本项目插件基于 opqqq 和 python--iotbot SDK 开发，使用前确保该基础依赖已经安装；
```bash
    pip install git+https://github.com/xiyaowong/python-iotbot.git@master
```
注：下载本依赖过程中需要 git 进行拉取，如果你没有安装 git ，可以下载安装 git 再安装本依赖，或者从该依赖的 [Github](https://github.com/xiyaowong/python--iotbot) 处打包下载，再用 Python 运行解压后的 `setup.py` 文件即可。

若出现 `setuptools` 错误，可以尝试升级 `setuptools` 后再进行安装：
```bash
    pip install --upgrade --ignore-installed setuptools
```

## 项目地址

opqqq：[OPQBOT / OPQ](https://github.com/OPQBOT/OPQ)

python--iotbot：[xiyaowong / python--iotbot](https://github.com/xiyaowong/python--iotbot)

## 从 nonebot-plugin 迁移

如果你是 [nonebot-plugin](https://github.com/fz6m/nonebot-plugin) 的用户，本项目插件与其配置完全一致，您只需将原来的配置文件放到新插件的相应资源位置即可低成本即开即用。