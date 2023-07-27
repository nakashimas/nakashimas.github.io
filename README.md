
<p>
<h1 align="center">Nakashimas.github.io</h1>
</p>
<h4 align="center">My Pages</h4>
<p align="center">
  <a>
    <img alt="AppVeyor badge" src="https://img.shields.io/badge/build-passing-brightgreen">
  </a>
  <a href="https://github.com/nakashimas/nakashimas.github.io/releases">
    <img src="https://img.shields.io/badge/releace-v0.0.1-58839b.svg?style=flat">
  </a>
  <a href="./LICENSE">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat">
  </a>
  <a>
    <img src="https://img.shields.io/badge/Made%20with-Hugo%200.78.2-57b9d3.svg?style=flat&logo=Hugo">
  </a>
  <br>
</p>

<h2> Contents </h2>

- [Description](#description)
- [Downloads](#downloads)
- [Development](#development)
- [License](#license)
- [Author](#author)

## Description

これは [**GihHub Pages**](https://docs.github.com/ja/free-pro-team@latest/github/working-with-github-pages) を使って公開するために作成したリポジトリです。

特に理由もなく更新したりします。

## Downloads

ページを閲覧する場合は、[こちら](https://nakashimas.github.io/)から参照できます。

`https://nakashimas.github.io/`

また、ソースコードのダウンロード方法は以下の通りです。

```sh
git clone https://github.com/nakashimas/nakashimas.github.io
```

いくつか前のバージョンのレイアウトや、ページを閲覧したい場合は、 [Releaces](https://github.com/nakashimas/nakashimas.github.io/releases) から閲覧できます。

## Development

publicディレクトリ(./docs)の初期化

```sh
git checkout --orphan gh-pages
git branch
git reset --hard
git commit --allow-empty -m "initialize gh-pages"
git push -u origin gh-pages
git checkout master
rm -rf docs # or "mkdir docs"
git worktree add docs gh-pages
```

デプロイ作業

```sh
hugo
cd docs
git add -A
git commit -m "publish update"
cd ..
git push origin gh-pages
```

ローカル環境でのテスト

```sh
hugo server
```


## License

This project is licensed under the terms of the [MIT](./LICENSE).

このプロジェクトは [MIT](./LICENSE) ライセンスに基づいて管理されています。

また、このプロジェクトには、異なるライセンスを持つ他のプロジェクトが用いられています。

**使われているプロジェクトのライセンスの一覧**

アセット・APIなど：

|  ASSETS        |  LICENSE                                                                      | VERSION      |
|  :----:        |  :-----:                                                                      | :-----:      |
| bootstrap      |  [MIT](https://github.com/twbs/bootstrap/blob/master/LICENSE)                 |  4.3.1       |
| awesome-font   |  [SIL OFL 1.1 and MIT and CC BY 3.0](https://fontawesome.com/license/free)    |  4.7.0       |
| svgbackgrounds |  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                    |  2020/11/21  |

Hugoテーマ：

|  THEME      |  LICENSE                                                               | VERSION      |
|  :----:     |  :-----:                                                               | :-----:      |
| roxo        |  [MIT](https://github.com/StaticMania/roxo-hugo/blob/master/LICENSE)   |  2020/05/30  |


## Author

`nakashimas.github.io` authors.
