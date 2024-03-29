---
title: "PORTABLE CMD"
date: 2019-12-23T20:56:42+06:00
type: blog
draft: true
description: "Console settings of http / https proxy"
image: "images/widgets/note_1748x1181.PNG"
category: ["HTTPS-PROXY", "WINDOWS-CONSOLE"]
images: []
docs_images: []
authors: 
    nakashimas:
        name: "nakashimas"
        profession: "programmer"
        description: "大阪のUX愛好家"
        icon_image: "https://avatars1.githubusercontent.com/u/61147776"
        url: "https://github.com/nakashimas"
---

#### 1 はじめに

このページはportable環境のメモです。

#### 2 問題

学校などの組織が用意したアカウントを使って、組織が用意したサーバを介して作業する場合、自前の環境を使いたいことが多々あります。例えば、私は「pipはあるけどgitがない」という問題に直面したときにそう感じました。  
自前の環境を使う、最も豪華な方法は、ラップトップPCを持ち込むことでしょう。あるいは、仮想マシンを使うことで解決できると思います。しかし、毎日のようにラップトップPCを持ち運んだり、二回osの起動時間を待つことは、かなりの苦痛です。  
特に、仮想マシンを使う利点は、コンピューターで少し作業する程度の人（私）には、殆どありません。  
従って、いつも持ち運ぶようなusbメモリに「Portable Git」や「VS Code」などを保存しておいて、環境を汚さずに使用できれば、殆ど問題がないと考えられます。  

#### 3 解決策

##### 3-1 方針

ここで、組織が用意した環境で起こる問題は、ソフトウェアが使うプロキシ設定やパスなどの参照先に原因があります。そして、多くのアプリケーションソフトウェアが使うプロキシ設定やパスなどの参照先は、環境変数によって変わる事が多いです。  
そのため、バッチファイルに問題ない参照先を設定するコマンドを書き込み、持ち運ぶことで問題を回避しようと思います。  

##### 3-2 用意するもの

- 持ち運ぶための記憶装置(usbメモリ)  
- バッチファイル(.bat)  
- 持ち運びたいソフトウェア(portable版がある場合はportable版を使用)  

バッチファイル(.bat)は、テキストファイルを作成して、拡張子を".bat"に変更することで作成できます。作成したバッチファイルは、持ち運ぶための記憶装置(usbメモリ)の最も浅い階層に保存しておくと便利です。

#### 4 書き込む内容

##### 4-1 proxy設定

まず、プロキシサーバへのインターネット接続設定を書きます。多くの場合、認証プロキシを通して通信を行うため、プロキシサーバへの接続設定を書いていない場合、gitなどの、ssh接続を行うソフトウェアや、pip、curlコマンド等でプロキシエラーが出力されます。  
設定の記述方法は、組織のプロキシ設定に則る必要があり、以下のような構成となっています。  

```sh
@SET HTTP_PROXY = http://ユーザー名.パスワード@proxy.団体名.ドメイン:8080
@SET HTTPS_PROXY = https://ユーザー名.パスワード@proxy.団体名.ドメイン:8080
```

ここで、"SET"は環境変数を設定するコマンドで、続く"HTTP_PROXY"、"HTTPS_PROXY"が変数名、"="の後の、"https\://ユーザー名.パスワード@proxy.団体名.ドメイン:8080"が変数に格納される値です。  
また、"ユーザー名"には組織から与えられているユーザー名を、"パスワード"にはパスワードを、"proxy.団体名.ドメイン"にはプロキシサーバのホスト名を代入してください。末尾の番号はポート番号なので気にしなくても大丈夫です。

##### 4-2 path設定

続いて、持ち運びたいソフトウェアのパスを通します。以下のコマンドは、環境変数PATHの末尾に持ち運びたいソフトウェアのパスを追記するものです。

```sh
@SET PATH = %PATH%;ソフトウェアのパス
```

ここで、"ソフトウェアのパス"には、持ち運ぶための記憶装置(usbメモリ)に保存している、持ち運びたいソフトウェアのパスを入力してください。例えば、"D:\programfiles\git\bin\"以下を参照したい場合は以下のように記述します。

```sh
@SET PATH = %PATH%;D:\programfiles\git\bin\
```

しかし、usbメモリのようなリムーバブルドライブは、環境によってドライブ名が変わるため、絶対パスによる記述では不具合が生じる場合があります。そこで、ドライブルートを取得する命令"%~d0"を使って以下のように記述します。

```sh
@SET REMOVABLEROOT=%~d0
@SET PATH = %PATH%;%REMOVABLEROOT%\programfiles\git\bin\
```

また、"%PATH%"は、元の環境変数"PATH"を参照するという意味です。これを記述しなかった場合、元から設定されている環境変数、例えば、"%windir%\system32\"などが上書きされ、消えてしまいます。"%windir%\system32\"にはコマンドプロンプトなどの、重要なソフトウェアが保存されているため、直接参照できないと不便です。

##### 4-3 path設定(他の使い方)

一方で、"%PATH%"を上書きすることの利点も存在します。例として、ソフトウェアが、管理者権限の設定などで編集できないファイルを参照し、動的に変更を加えている場合などがあてはまります。そのような場合は、以下のように必要な"PATH"設定のみ記述し、参照先を変更することで、管理者権限の制約を回避できる可能性があります。

```sh
@SET REMOVABLEROOT=%~d0
@SET PATH = %windir%\system32\;%REMOVABLEROOT%\programfiles\git\bin\
```

Userディレクトリなども以下のように変更できます。

```sh
@SET REMOVABLEROOT=%~d0
@SET USERPROFILE=%REMOVABLEROOT%\User\someone
```

##### 4-4 コマンドプロンプトの起動

しかしながら、上記で設定した環境変数は、バッチファイルの中で宣言したため、バッチ処理が終了すると解放されてしまいます。よって、末尾に以下のコマンドプロンプトを起動するコマンドを加えて、環境変数を保持したままコマンドを入力できるようにします。

```sh
@call cmd
```

#### 5 バッチファイルの中身の全体像

以上の手順を踏まえて編集したバッチファイルは、最終的に以下のような内容になります。

```sh
@SET REMOVABLEROOT=%~d0
@SET PATH = %PATH%;%REMOVABLEROOT%\ソフトウェアのパス
SET HTTP_PROXY = http://ユーザー名.パスワード@proxy.団体名.ドメイン:8080
SET HTTPS_PROXY = https://ユーザー名.パスワード@proxy.団体名.ドメイン:8080
@call cmd
```

#### 6 参考

Windowsコマンドプロンプトで認証プロキシを突破する [link](https://qiita.com/hamham/items/cb658f5a8c74f35255be)
