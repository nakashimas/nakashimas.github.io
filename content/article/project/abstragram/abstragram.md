---
title: "ABSTRAGRAM"
date: 2023-06-31T00:00:00+09:00
type: work
description: "Our discord bot"
category: ["BOT", "INSTAGRAM"]
authors: 
  nakashimas:
      name: "nakashimas"
      profession: "programmer"
      description: "大阪のUX愛好家"
      icon_image: "https://avatars1.githubusercontent.com/u/61147776"
      url: "https://github.com/nakashimas"
---

#### Description

「Abstragram」は、抽象を表す「Abstract」と、「Instagram」のかばん語です。
世間一般で語られている、トレンドキーワードを検索したときに、人々が目にする画面の情報を要約し、比率を基に抽象画像を生成します。
そして、生成した画像をInstagramに投稿し、BOTとして働きます。

まず、トレンドキーワードはGoogle Trends APIとTwitter APIを使用して収集されます。
得られたキーワードをGoogle画像検索と、Google検索に入力し、公開されている画像や、WEBサイトのスクリーンショットを獲得します。
そして、画像から色の出現頻度を取得し、画面にどれほどの比率でその色が含まれているのか算出します。

抽象画像はPiet Mondrianの[『Composition』](https://fr.wikipedia.org/wiki/Composition_avec_grand_plan_rouge,_jaune,_noir,_gris_et_bleu)に似せて、複数の長方形とその座標として生成します。
さらには、生成された長方形を、面積の大きさと、トレンドキーワードの色の出現比率が対応するように塗りつぶします。


#### Usage

このBOTのメインの機能は、Pythonによって作成されたスクリプトファイルで構成されています。
従って、Pythonライブラリとして扱うこともできます。

for pip install :

```sh
pip install git+https://github.com/nakashimas/abstragram
```

インストール後、ライブラリをインストールし、抽象画像生成用のインスタンスを作成し、検索対象となるトレンドキーワードを入力します。

```py
import abstragram
_abs = abstragram.Abstragram(["what is abstragram", "abstragram is good"])
```


#### Note

Twitter APIの有料化、Instagramの自動化規制の強化により、BOTとしては機能しなくなりました。
画像生成とGoogleによるトレンドの取得は機能します。

