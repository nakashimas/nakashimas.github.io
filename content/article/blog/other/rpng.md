---
title: "PNG ON R LANG"
date: 2019-12-23T20:56:42+06:00
type: blog
draft: true
description: "To management PNG output on R Studio"
image: "images/widgets/note_1748x1181.PNG"
category: ["R-STUDIO", "PNG", "GRAPHIC-DEVICES"]
images: []
docs_images: []
authors: 
    nakashimas:
        name: "nakashimas"
        profession: "student"
        description: "京都の学生です。"
        icon_image: "https://avatars1.githubusercontent.com/u/61147776"
        url: "https://github.com/nakashimas"
---

#### 1 はじめに

このページはR言語でいろいろな出力をpng形式で保存する方法のメモです。png形式以外にも、jpegやpdf、bitmapで保存できますが、簡単のためpng形式のみを記録します。  
もっと良い方法が分かった場合、追記、修正します。

R version 3.6.2 (2019-12-12)

#### 2 GUIで保存する方法

##### 2-1 グラフ

Rstudioの場合、表示されたグラフを右クリックすることで、画像を保存する選択肢を表示できます。

<div class="image"><img src="/images/sub/imgrpng/saveaspng1.png"></div>

<div class="image"><img src="/images/sub/imgrpng/saveaspng2.png"></div>

右クリック　→　「Save image as ...」を選択　→　保存先を選択

といった手順で保存することができます。

##### 2-2　表

クリップボードを使います。画面のスクリーンショットを撮るか、コンソールへの出力をコピーしてExcelなどでレイアウトを整えます。

##### 2-3 テキスト

コンソールへの出力テキスト("cat()"や"summary()"による出力)を保存する場合も、表と同じく、クリップボードを使います。画面のスクリーンショットを撮るか、出力をコピーしてExcelなどでレイアウトを整えます。

#### 3 スクリプトで保存する方法

##### 3-1 グラフ

グラフをpng画像に直接出力するためには、以下のような記述が使えます。

```r
# pngを開く
png(filename = "graph.png", width = 500, height = 500)
# ---------------------------------------------------------------->
#
# ここに描画のスクリプトを記述する。
#
# ---------------------------------------------------------------->
# pngを解放
dev.off()
```

"png()"関数は、出力先を"filename"引数に指定したpng画像（ここでは、「graph.png」）に置き換えるものです。また、"dev.off()"関数は置き換え状態を解除するもので、この関数を末尾に記述しておかないと、後に続く出力命令が全て"filename"引数のpng画像に上書きされます。  
例えば、散布図を描画する場合は以下のようになります。

```r
# pngを開く
png(filename = "graph.png", width = 500, height = 500)
# ---------------------------------------------------------------->
x <- 1:10
y <- 1:10
# 描画　
plot(x, y)
# ---------------------------------------------------------------->
# pngを解放
dev.off()
```

<div class="image"><img src="/images/sub/imgrpng/graph1x1.png"></div>

また、通常の出力と同様に、"par()"関数を使えば、複数のグラフを一つのpng画像に出力することもできます。

```r
# pngを開く
png(filename = "graph.png", width = 500, height = 500)
# ---------------------------------------------------------------->
# 2x2に描画するように設定する。mfrowは行順に並べる。
par(mfrow = c(2,2))
x <- 1:10
y <- 1:10
# 描画　
plot(x, y)
plot(x, y)
plot(x, y)
plot(x, y)
# ---------------------------------------------------------------->
# pngを解放
dev.off()
```

<div class="image"><img src="/images/sub/imgrpng/graph2x2.png"></div>

##### 3-2　表

この"png()"関数は、出力先を置き換えるものであると説明しましたが、より正確には、RStudioGDでグラフィックデバイスを開くものです。つまり、グラフィックデバイスにグラフを描画する"plot()"などは"png()"関数でpng画像の出力が可能ですが、"print()"や"cat()"を使った出力は、上記の方法ではサポートされないということです。  
しかし、逆に、グラフィックデバイスに出力するように設定することで、大抵の出力をpng画像として保存することができます。  

tableやdataframeなどの表示も、デフォルトではグラフィックデバイスに出力されないため、上記の方法ではpng画像の出力ができませんが、以下のような方法でグラフィックデバイスに出力するようにすると、png画像としての保存ができます。

標準ライブラリの「grid」と「gridExtra」を使うため、序盤にロードしておきます。  

```r
library(gridExtra)
library(grid)

# pngを開く
png(filename = paste("table.png"), width = 1200, height = 250)

# grid pageを開く
grid.newpage()
# ---------------------------------------------------------------->
my.table <- table(rep(c("c","d"),each=10),rep(c("a","b"),each=10))
# ---------------------------------------------------------------->
# grid pageに描画できる型に変える
my.data <- gridExtra::tableGrob(my.table)
# grid pageに描画する
grid.draw(my.data)

# pngを解放
dev.off()
```

<div class="image"><img src="/images/sub/imgrpng/tablemono.png"></div>

ここでは、表示したいテーブルを"my.table"と定義しています。タイトルなどのテキストも、"grid.text()"関数を用いて以下のように記述できます。

```r
my.title <- "表1: my.dataの集計結果"
grid.text(my.title, y = 0.9, gp = mygp)
# grid pageに描画する
grid.draw(my.data)
```

##### 3-3 テキスト

以上のような方法で、強引にグラフィックデバイスに出力すると、コンソールへの出力テキストもpng画像として直接保存できます。  
まず、コンソール出力を部分的に取得するために、"sink()"関数を使って、コンソール出力をテキストファイルに書き込みます。  

```r
# コンソール出力を"mytext.txt"に保存
sink(file="mytext.txt")
# ---------------------------------------------------------------->
#
# ここにコンソール出力を伴うスクリプトを記述する。
#
# ---------------------------------------------------------------->
sink()
```

"sink()"関数は、"png()"関数と同様に、以降の出力を全て対象の出力先に保存してしまいます。そのため、末尾に引数無しの"sink()"関数を記載して、デフォルトの出力先に変更しておきます。  

次に、"scan()"関数を使って、保存したテキストファイルを改行コードごとに分けたベクトルを作成します。

```r
# コンソール出力を読み込んでベクトルにする
texts <- scan(file = "mytext.txt", what = character(), 
    sep = "\n", skip = 0L, nlines = 0L, na.strings = "NA", 
    flush = FALSE, fill = FALSE, strip.white = FALSE, quiet = FALSE, 
    blank.lines.skip = FALSE, multi.line = TRUE, comment.char = "", 
    allowEscapes = FALSE, fileEncoding = "", encoding = "unknown", 
    text, skipNul = FALSE)
```

最後に、グラフィックデバイスを開いて等間隔にテキストを出力します。

```r
# pngを開く
png(filename="./hoge.png")
# 新しいデバイスを開く
par(mar=c(0,0,0,0), xpd=NA, mgp=c(0,0,0), oma=c(0,0,0,0), ann=FALSE, adj=0)
plot.new()
plot.window(0:1,0:1)
# デバイスの中に等間隔にテキストを表示
counts <- 1
height <- 1/length(texts)
for (t in rev(texts)) {
  text(.1, height * counts, t, cex=1)
  counts <- counts + 1
}
# pngを解放
dev.off()
```

#### 4 使用例

##### 4-1 グラフの例

データ「Arthritis」の全ての項目の単純集計結果をグラフとして保存。

```r
library(vcd)
counts <- 1
tmp <- Arthritis[,c(2,3,5)]

for (i in colnames(tmp)) {
  png(filename = paste(c(counts,".png"), collapse = ""), width = 500, height = 500)
  # -------------------------------------------------------------->
  # 描画　
  my.data <- table(tmp[,i])
  barplot(my.data, main = paste(c("図", as.character(counts), ": ", as.character(i)), collapse = ""))
  # -------------------------------------------------------------->
  # pngを解放
  dev.off()
  counts <- counts + 1
}
```

図1の結果

<div class="image"><img src="/images/sub/imgrpng/graph1.png"></div>

Wordに貼る場合、図表番号はWrod側で自動割り当てしてくれるので、Rで図に題名を付けておく理由はあまりないかもしれません。

##### 4-2 表の例

データ「Arthritis」の全ての項目の単純集計結果を表として保存。

```r
library(vcd)
library(gridExtra)
library(grid)
data(Arthritis)
# ---------------------------------------------------------------->
# 列名を調整する関数
column_adjusted <- function(.col, len){
  ng <- c()
  l <- 1
  while(l <= nchar(.col)){
    t <- as.vector(str_sub(.col, start = l, end = l + len - 1))
    ng <- c(ng, t)
    l <- l + len
  }
  for(k in 1:(length(ng)-1)){
    ng[k] <- paste(ng[k],"\n")
  }
  return(paste(ng, collapse = ""))
}

columns_adjusted <- function(.cols, len){
  for(c in 1:length(.cols)){
    if(nchar(.cols[c]) > len){
      .cols[c] <- column_adjusted(.cols[c], len)
    }
  }
  return(.cols)
}
# ---------------------------------------------------------------->
# グラフィックスパラメータの設定
mytheme <- gridExtra::ttheme_default(base_size = 30,
                                     core = list(fg_params = list(cex=1)),
                                     colhead = list(fg_params = list(cex=1)))
mygp <- grid::gpar(fontsize=30)
# ---------------------------------------------------------------->
mytablepng <- function(tmp, i, counts){
    # pngを開く
    png(filename = paste("./",i,".png"), width = 1200, height = 250)
    # grid pageを開く
    grid.newpage()
    .data <- tmp[,i]
    .data <- as.data.frame(table(.data, useNA = "no"))
    colnames(.data) <- c("選択肢","度数")
    # 列名を調整
    .data[,1] <- columns_adjusted(as.vector(.data[,1]), 8)
    .data <- gridExtra::tableGrob(t(.data),theme = mytheme)
    # タイトル
    .title <- paste(c("表",as.character(counts), ": ", as.character(i), "の集計結果"), collapse = "")
    grid.text(.title, y = 0.9, gp = mygp)
    grid.draw(.data)
    # pngを解放
    dev.off()
    counts <- counts + 1
}
# ---------------------------------------------------------------->
counts <- 1
tmp <- Arthritis[,c(2,3,5)]
for (i in 1:length(tmp)) {
  mytablepng(tmp, i, counts)
}
```

表1の結果

<div class="image"><img src="/images/sub/imgrpng/table1.png"></div>

日本語文の質問の選択肢など、長いファクター名は見切れたり、重なったりする可能性があります。そのため、適度に改行コードを加えるなどして調整することが必要です。例では、指定文字数ごとに改行コードを挟む処理を行っています。

#### 4-3 テキストの例

データ「mtcars」を使った適当な線形回帰分析の結果をpng画像に保存。

```r
# コンソール出力を"mytext.txt"に保存
sink(file="mytext.txt")
# ---------------------------------------------------------------->
data("mtcars")
summary(lm(mpg~.,data=mtcars))
# ---------------------------------------------------------------->
sink()
# コンソール出力を読み込んでベクトルにする
texts <- scan(file = "mytext.txt", what = character(), 
    sep = "\n", skip = 0L, nlines = 0L, na.strings = "NA", 
    flush = FALSE, fill = FALSE, strip.white = FALSE, quiet = FALSE, 
    blank.lines.skip = FALSE, multi.line = TRUE, comment.char = "", 
    allowEscapes = FALSE, fileEncoding = "", encoding = "unknown", 
    text, skipNul = FALSE)
# pngを開く
png(filename="./hoge.png")
# 新しいデバイスを開く
par(mar=c(0,0,0,0), xpd=NA, mgp=c(0,0,0), oma=c(0,0,0,0), ann=FALSE, adj=0)
plot.new()
plot.window(0:1,0:1)
# デバイスの中に等間隔にテキストを表示
counts <- 1
height <- 1/length(texts)
for (t in rev(texts)) {
  text(.1, height * counts, t, cex=1)
  counts <- counts + 1
}
# pngを解放
dev.off()
```

<div class="image"><img src="/images/sub/imgrpng/hoge.png"></div>

Rstudioの出力と見比べると、微妙にずれています。調整すると大丈夫そうですが、面倒なのでテキストはGUIから保存する方がいいかもしれません。

#### 5 参考

"R で描いたグラフを PNG や PDF に保存する方法" [link](https://stats.biopapyrus.jp/r/graph/imagedevice.html)

"RDocumentation" 
"png function" [link](https://www.rdocumentation.org/packages/grDevices/versions/3.4.1/topics/png)  
"sink function" [link](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sink)  
"scan function" [link](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/scan)  
"grid package" [link](https://www.rdocumentation.org/packages/grid/versions/3.6.2)  
"gridExtra package" [link](https://www.rdocumentation.org/packages/gridExtra/versions/2.3)

"R List of Graphical Devices" [link](https://stat.ethz.ch/R-manual/R-devel/library/grDevices/html/Devices.html)

"How to do in R: load an image file, print text on image, save modified image" [link](https://stackoverflow.com/questions/23807021/how-to-do-in-r-load-an-image-file-print-text-on-image-save-modified-image)

