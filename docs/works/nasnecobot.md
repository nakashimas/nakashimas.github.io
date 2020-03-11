---
layout: default
title: "自動作曲bot 「茄子ねこ」"
date: 2020-3-8
---

## 説明

茄子ねこ（@nasneco）に成り代わって作曲したり、呟いたりするTwitter botです。  

## 稼働状況

<div style="text-align:center;">
    <a class="twitter-timeline" data-width="320" data-height="400" data-chrome="transparent nofooter" data-link-color="#ff8080" href="https://twitter.com/cc_99_ff?ref_src=twsrc%5Etfw">
        Tweets by cc_99_ff
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Usage

### 条件を指定して楽曲を生成させて受け取る

条件なし

"""sh
@cc_99_ff music;
"""

ピッチ配列の指定

"""sh
@cc_99_ff music?pitch=0,0,0,0;
"""

始点時間の指定

"""sh
@cc_99_ff music?sec=0.0,0.1,0.2,0.3;
"""

## 改修予定

投稿機能のlinux対応