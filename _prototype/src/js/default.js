
// ------------------------------------------------------------------------>
// 初期化呪文
mdc.autoInit();
// ------------------------------------------------------------------------>
// ------------------------------------------------------------------------>
// drawer listの設定
const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
const pagenumber = parseInt(document.getElementById("ind").innerHTML, 10);
if(isNaN(pagenumber)){
  list.selectedIndex = -1;
}else{
  list.selectedIndex = pagenumber;
}
// drawer(id: index-drawer)の設定
const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
const topAppBar =  mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector(".mdc-top-app-bar"));
topAppBar.setScrollTarget(document.getElementById("main-content"));
// ------------------------------------------------------------------------>
// ハンバーガーにイベントを付ける
let navbutton = document.getElementById("nav-button");
navbutton.addEventListener("click", function(){
  // trueを代入するとdrawerを開く
  drawer.open = !drawer.open;
});
// drawer listのitemの設定
// リンクは元ファイルが".md"でも、".html"と書く必要がある。(当然)
let sub_page_addresses = [
  "https://nakashimas.github.io/index.html",
  "#infocontact",
  "#infoform",
  "https://nakashimas.github.io/docs/memo/memo.html",
  "https://nakashimas.github.io/docs/works/works.html",
  "https://nakashimas.github.io/docs/others/others.html",
  "https://nakashimas.github.io/docs/portfolio/portfolio.html"];
let listitem = document.querySelectorAll('.drawer-list-item');
for(let i = 0; i < listitem.length; ++i){
  listitem[i].addEventListener('click', function(){
    if(i == 1 || i == 2){
    }else{
      // その他はpage移動
      location.href = sub_page_addresses[i];
    }
    // 選択後、drawerを閉じる
    drawer.open = false;
  });
};
// ------------------------------------------------------------------------>
// その他ツールバーのイベント
// home
let homebutton = document.getElementById("home-button");
homebutton.addEventListener("click", function(){
  location.href="https://nakashimas.github.io/index.html";
});
// share
let sharebutton = document.getElementById("share-button");
sharebutton.addEventListener("click", function(){
  navigator.share(
    {
      title: document.title,
      text: document.title,
      url: "https://nakashimas.github.io/index.html"
    }
  );
});
// github
let githubbutton = document.getElementById("github-button");
githubbutton.addEventListener("click", function(){
  location.href="https://github.com/nakashimas";
});