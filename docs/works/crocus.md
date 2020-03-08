---
layout: default
title: "Crocus"
date: 2020-3-8
---

## 説明

楽曲分析支援ツールとして作りました。

[Crocus github](https://github.com/nasneco/Crocus)

## 使用法

v0.1.0はpyinstallerで配布していましたが、不都合があったため、pythonモジュールとして起動するようにしておきました。

インストール方法

```sh
pip install git+https://github.com/nasneco/Crocus@master
```

起動方法

```sh
python -m crocusmodule
```

## 改修予定

GUIの変更、アルゴリズムの修正、楽譜データの管理方法の変更、ユーザーデータの管理方法の変更、配布用バイナリの作成(c/c++)