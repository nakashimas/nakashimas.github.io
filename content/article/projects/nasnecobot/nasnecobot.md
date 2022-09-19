---
title: "NASNECO BOT"
date: 2019-12-23T20:56:42+06:00
type: work
description: "Artifical Music Composer"
image: "images/widgets/piano_1748x1181.PNG"
category: ["BOT", "ML", "SNS"]
images: []
docs_images: []
authors: 
    nakashimas:
        name: "nakashimas"
        profession: "student"
        description: "京都の学生です。"
        icon_image: "https://avatars1.githubusercontent.com/u/61147776"
        url: "https://github.com/nakashimas"
    nasneco:
        name: "nasneco"
        profession: "student"
        description: "趣味が作曲とかの人"
        icon_image: "https://pbs.twimg.com/profile_images/1204033436156981248/HutTMW0m_400x400.jpg"
        url: "https://twitter.com/nasneco"
---

#### 概要　

自動作曲bot「茄子ねこ」は、茄子ねこ（@nasneco）に成り代わって作曲したり、呟いたりするTwitter botです。

<div style="text-align:center"><img src="/images/sub/nasnecobot/profile.png" style="width:80%"></div>

[Twitterアカウント(@cc_99_ff) >](https://twitter.com/cc_99_ff)

#### 機能　

このbotの主な機能は以下の三点です。

- 文章の投稿
- 楽曲の投稿
- 楽曲生成依頼に対する楽曲の投稿

加えて、Twitterアカウント自体の機能として、次のようなこともします。

- フォローを返す

なお、広告系アカウント、スパムアカウントはフォローを返さない場合があります。

#### 稼働状況

<br>
<div>
    <a class="twitter-timeline" data-width="512" data-height="800" data-chrome="transparent nofooter" data-link-color="#ff8080" href="https://twitter.com/cc_99_ff?ref_src=twsrc%5Etfw">
        Tweets by cc_99_ff
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<br>

#### 使用方法

##### 楽曲生成依頼

botに対してリプライを送ることによって、楽曲生成を依頼することができます。  
生成された楽曲は、依頼主に対する動画付きのリプライで返されます。

依頼文の構成は以下の通りです。

```sh
@cc_99_ff music;
```

また、旋律の要件に応じて、オプションが指定できます。  
詳しくは、[楽曲生成依頼についてのページ](/article/nasnecobot/nasnecobot_generation)を参照してください。

#### 投稿内容の扱い、及び利用上の注意

##### 説明　

このbotの文章の投稿は、他のTwitterユーザーの投稿から独自に収集したデータと、MCMCによって生成しています。  
また、楽曲の投稿は、開発者が選んだ著作権保護期間が終了したピアノ独奏曲と、茄子ねこ（@nasneco）の楽曲から生成しています。  

##### 責任　

万一、このbotの投稿及びシステムが損害を発生させた場合には、理由の如何にかかわらず、管理者及び開発者は保証をせず、また、一切の責任を負いません。  

##### 管理　

投稿内容は、ある程度制御が可能です。そのため、投稿内容に権利侵害や、不適切な内容があれば、下記のお問い合わせ先までご連絡ください。管理者及び開発者の判断により、なるべく修正いたしまします。あるいは、管理者の判断により、指定された投稿の削除を行います。

#### お問い合わせ

以下のような内容で、管理者及び開発者にお問い合わせされる場合は、本サイトの[「CONTACTS」](/contacts/)からフォームにメッセージを送信してください。返信が必要な方は、「EMAIL ADDRESS」の項目にメールアドレスを記載してください。  

- 投稿の削除要請
- このbotや、本サイトに関するメッセージ
- 改善点
- 質問
- 開発への参加

#### 近況　

2020/09/19 BOTの動作を管理する機能を改善しました。 

過去の大幅な変更

2020/04/19 楽曲生成依頼機能の改修をしました。 
2020/04/19 生成依頼機能の改修をしました。  
2020/04/08 楽曲生成機能の改良をしました。  
2020/03/19 動画投稿機能の修正をしました。  
2020/03/17 フォローを返すようにしました。  
2020/03/16 文章を投稿するようにしました。  
2020/03/07 開発を引き継ぎ、再開しました。  
2019/10/24 稼働を一時止めました。  
2019/10/12 楽曲投稿を始めました。  

#### 改修予定

楽曲生成モデルの大幅改善

その他マイナーチェンジ

#### 質問に対する回答

まだ質問はありません

