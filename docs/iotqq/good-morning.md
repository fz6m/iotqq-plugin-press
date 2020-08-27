---
sidebar: auto
---

# 关注早晚安

*Version: 1.3*

## 部署流程

### 安装 SDK
确保你已经安装了基础 [SDK](../guide/guide.md) 。

### 下载
直接在 [releases](https://github.com/fz6m/opqqq-plugin/releases) 中下载该插件，亦或 clone 等方式打包下载本项目。

注：如果你通过 releases 下载，下载得到的是独立的插件，如果你想使用多个插件，为减少将文件混合在一起的成本，建议打包下载整个项目。

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install python-dateutil
```
注：如果您下载依赖太慢，可选用大清源加速，例：
```bash
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple python-dateutil
```

### 添加账号
在下载的 `bot.py` 主程序内，你需要修改 `bot_qq` 为自己的机器人账号：
```python
    bot_qq = 12345678
```

## 开始使用
当有群友在群内发送与 早晚安 相关的消息时，就会自动登记并统计工作 / 睡眠的时间（如果有）。

## 自定义化
### 触发关键词
触发 早晚安 为完全匹配（防止不必要的消息），相关触发命令可在 `plugins/bot_good_morning.py` 文件开头找到如下代码：
```python
    # 早安指令
    goodMorningInstructionSet = ['早', '早安', '哦哈哟', 'ohayo', 'ohayou', '早安啊', '早啊', '早上好']
    # 晚安指令
    goodNightInstructionSet = ['晚', '晚安', '哦呀斯密', 'oyasumi', 'oyasimi', '睡了', '睡觉了']
```

### 其他配置
一般情况下，并不需要自定义这部分的配置，所以没有抽取相应的配置文件，如果需要，请按如下方式寻找：

文件：`plugins/bot_good_morning.py`
单位：小时

```python
# Line 360
# 早安后 4 小时内不能晚安
if sleepingTime <= 4:
# Line 420
# 晚安后 4 小时内不能早安
if soberTime <= 4:
# Line 365
# 睡眠时间小于 24 小时，才会统计睡眠时间
if sleepingTime < 24:
# Line 425
# 工作时间小于 24 小时，才会统计工作时间
if soberTime < 24:
```

## 统计排行过期时间
* 起床排名：每天 `00:00` 重置排名
* 晚安排名：每天 `12:00` 重置排名

注：考虑到修仙，假如 `00:00` 点过后再 晚安 ，依然参与前一天的晚安排名。

## 其他

您可以安装 `ujson` 依赖以加速 json 读取的速度：
```bash
    pip install ujson
```
注：如果安装 `ujson` 依赖失败，你可以放弃安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```