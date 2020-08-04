---
sidebar: auto
prev: /guide/manual
---

# 了解基础

本项目插件基于 iotqq 和 python--iotbot SDK 开发，使用前确保该基础依赖已经安装；
```bash
    pip install git+https://github.com/xiyaowong/python-iotbot.git@master
```
注：下载本依赖过程中需要 git 进行拉取，如果你没有安装 git ，可以下载安装 git 再安装本依赖，或者从该依赖的 [Github](https://github.com/xiyaowong/python--iotbot) 处打包下载，再用 Python 运行解压后的 `setup.py` 文件即可。

## 项目地址

iotqq：[IOTQQ / IOTQQ](https://github.com/IOTQQ/IOTQQ)

python--iotbot：[xiyaowong / python--iotbot](https://github.com/xiyaowong/python--iotbot)

## 从 nonebot 迁移

本项目插件来自于 [nonebot-plugin](https://github.com/fz6m/nonebot-plugin) 插件的重构，配置完全一致，您只需将原来的配置文件放到新插件的相应资源位置即可低成本即开即用。