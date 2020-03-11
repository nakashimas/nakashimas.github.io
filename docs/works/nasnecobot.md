---
layout: default
title: "自動作曲bot 「茄子ねこ」"
date: 2020-3-12
---

## 概要

茄子ねこ（@nasneco）に成り代わって作曲したり、呟いたりするTwitter botです。

 ![profile](https://nakashimas.github.io/img/nasnecobot/profile.png "profile")

[Twitterアカウント(@cc_99_ff) >](https://twitter.com/cc_99_ff)

## 機能

（システムの移設に伴う改修で、殆ど機能していません）

- 文章の投稿
- 楽曲の投稿（改修中）
- 楽曲生成依頼に対する楽曲の投稿（改修中）

## 稼働状況

<div style="text-align:center;">
    <a class="twitter-timeline" data-width="320" data-height="400" data-chrome="transparent nofooter" data-link-color="#ff8080" href="https://twitter.com/cc_99_ff?ref_src=twsrc%5Etfw">
        Tweets by cc_99_ff
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## 使用方法

### 楽曲生成依頼

条件なしの場合

```sh
@cc_99_ff music;
```

ピッチ配列の指定をする場合

```sh
@cc_99_ff music?pitch=0,0,0,0;
```

始点時間の指定をする場合

```sh
@cc_99_ff music?sec=0.0,0.1,0.2,0.3;
```

## 投稿内容の扱い、及び利用上の注意

### 説明

このbotの文章の投稿は、他のTwitterユーザーの投稿から独自に収集したデータと、MCMCによって生成しています。  
また、楽曲の投稿は、開発者が選んだ著作権保護期間が終了したピアノ独奏曲と、茄子ねこ(@nasneco)の楽曲から生成しています。  

### 責任

万一、このbotの投稿及びシステムが損害を発生させた場合には、理由の如何にかかわらず、管理者は保証をせず、また、一切の責任を負いません。  

### 管理

投稿内容は、ある程度制御が可能です。そのため、投稿内容に権利侵害や、不適切な内容があれば、下記のお問い合わせ先までご連絡ください。管理者の判断により、なるべく修正いたしまします。あるいは、管理者の判断により、指定された投稿の削除を行います。

## お問い合わせ

以下のような内容で、管理者にお問い合わせされる場合は、本サイト画面左上のメニューから、「Email」をクリックしてメールを送信するか、<管理者のメールアドレス <&#110;&#97;&#115;&#99;&#111;&#114;&#46;&#110;&#101;&#99;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;> 宛てにメールを送信してください。  

- 開発への参加

他に、以下のような内容で管理者にお問い合わせされる場合は、本サイトの「Form」からフォームにメッセージを送信してください。返信が必要な方は、「e-mail」の項目にメールアドレスを記載してください。  
（こちらの連絡は、メールアドレスの信頼性などを考慮して返信しない場合があります。）

- 投稿の削除要請
- このbotや、本サイトに関するメッセージ
- 改善点
- 質問

## 改修予定

動画投稿機能のlinux対応、楽曲生成アルゴリズムの改良

## 質問に対する回答

まだ質問はありません

<hr>

[Home >](https://nakashimas.github.io)  
[Works >](https://nakashimas.github.io/docs/works/works.html)