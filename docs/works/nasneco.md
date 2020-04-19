---
layout: default
title: "自動作曲bot 「茄子ねこ」"
date: 2020-3-12
---

## 概要

自動作曲bot「茄子ねこ」は、茄子ねこ（@nasneco）に成り代わって作曲したり、呟いたりするTwitter botです。

 ![profile](https://nakashimas.github.io/img/nasneco/profile.png "profile")

[Twitterアカウント(@cc_99_ff) >](https://twitter.com/cc_99_ff)

## 機能

このbotの主な機能は以下の三点です。（改修中の機能は停止しています。）

- 文章の投稿
- 楽曲の投稿
- 楽曲生成依頼に対する楽曲の投稿（改修中）

加えて、Twitterアカウント自体の機能として、次のようなこともします。

- フォローを返す

なお、広告系アカウント、スパムアカウントはフォローを返さない場合があります。

## 稼働状況

<div style="text-align:center;">
    <a class="twitter-timeline" data-width="320" data-height="400" data-chrome="transparent nofooter" data-link-color="#ff8080" href="https://twitter.com/cc_99_ff?ref_src=twsrc%5Etfw">
        Tweets by cc_99_ff
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## 使用方法

### 楽曲生成依頼

botに対してリプライを送ることによって、楽曲生成を依頼することができます。  
生成された楽曲は、依頼主に対する動画付きのリプライで返されます。

依頼文の構成は以下の通りです。

```sh
@cc_99_ff music;
```

また、旋律の要件に応じて、オプションが指定できます。  
詳しくは、[楽曲生成依頼についてのページ](https://nakashimas.github.io/docs/works/nasneco_generation.html)を参照してください。

## 投稿内容の扱い、及び利用上の注意

### 説明

このbotの文章の投稿は、他のTwitterユーザーの投稿から独自に収集したデータと、MCMCによって生成しています。  
また、楽曲の投稿は、開発者が選んだ著作権保護期間が終了したピアノ独奏曲と、茄子ねこ（@nasneco）の楽曲から生成しています。  

### 責任

万一、このbotの投稿及びシステムが損害を発生させた場合には、理由の如何にかかわらず、管理者及び開発者は保証をせず、また、一切の責任を負いません。  

### 管理

投稿内容は、ある程度制御が可能です。そのため、投稿内容に権利侵害や、不適切な内容があれば、下記のお問い合わせ先までご連絡ください。管理者及び開発者の判断により、なるべく修正いたしまします。あるいは、管理者の判断により、指定された投稿の削除を行います。

## お問い合わせ

以下のような内容で、管理者及び開発者にお問い合わせされる場合は、本サイトの[「Form」](#infoform)からフォームにメッセージを送信してください。返信が必要な方は、「e-mail」の項目にメールアドレスを記載してください。  

- 投稿の削除要請
- このbotや、本サイトに関するメッセージ
- 改善点
- 質問
- 開発への参加

## 近況

2020/04/08 楽曲生成機能の改良をしました。

<details>

<summary>過去の大幅な更新</summary>

2020/04/08 楽曲生成機能の改良をしました。  
2020/03/19 動画投稿機能の修正をしました。  
2020/03/17 フォローを返すようにしました。  
2020/03/16 文章を投稿するようにしました。  
2020/03/07 開発を引き継ぎ、稼働を再開しました。  
2019/10/24 稼働を一時止めました。  
2019/10/12 楽曲投稿を始めました。  

</details>

## 改修予定

楽曲生成依頼機能の修正、楽曲生成機能のlinux対応、その他マイナーチェンジ

## 質問に対する回答

まだ質問はありません

<hr>

[Home >](https://nakashimas.github.io/index.html)  
[Works >](https://nakashimas.github.io/docs/works/works.html)