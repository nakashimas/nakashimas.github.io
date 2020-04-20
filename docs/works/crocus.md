---
layout: default
title: "Crocus"
date: 2020-3-8
---

## 説明

楽曲分析支援ツール「Crocus」は、古典的楽曲分析をサポートし、趣味などで音楽を扱う人に示唆のあるデータを視覚的に提示します。

[Crocus >](https://github.com/nakashimas/Crocus)

## 機能

主な機能は以下の通りです。

- 音のpitchや長さの要約統計量の提示
- FP-treeを使った音の出現頻度情報の提示

## 使用方法

v0.1.0はpyinstallerで配布していましたが、不都合があったため、pythonモジュールとして起動するようにしておきました。

### インストール方法

```sh
pip install git+https://github.com/nasneco/Crocus@master
```

### 起動方法

```sh
python -m crocusmodule
```

## 改修予定

GUIの変更、アルゴリズムの修正、楽譜データの管理方法の変更、ユーザーデータの管理方法の変更、配布用バイナリの作成。  
2019年12月12日から更新がありません。現在停止中です。

<hr>

[Home >](https://nakashimas.github.io/index.html)  
[Works >](https://nakashimas.github.io/docs/works/works.html)