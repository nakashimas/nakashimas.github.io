
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
  list.selectedIndex = 0;
}else{
  list.selectedIndex = pagenumber;
}
// drawer listのitemの設定
// リンクは元ファイルが".md"でも、".html"と書く必要がある。(当然)
let sub_page_addresses = [
  "https://nakashimas.github.io/",
  "",
  "https://nakashimas.github.io/docs/memo/memo.html",
  "",
  ""];
let listitem = document.querySelectorAll('.drawer-list-item');
for(let i = 0; i < listitem.length; ++i){
  listitem[i].addEventListener('click', function(){
    if(i == 1){
      // メール送信
    }else{
      // その他はpage移動
      location.href = sub_page_addresses[i];
    }
  });
};
// drawer(id: index-drawer)の設定
const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
const topAppBar =  mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector(".mdc-top-app-bar"));
topAppBar.setScrollTarget(document.getElementById("main-content"));
// ------------------------------------------------------------------------>
// ハンバーガーにイベントを付ける
let navbutton = document.getElementById("nav-button");
navbutton.addEventListener("click", function(){
  // trueを代入すると開く
  drawer.open = !drawer.open;
});
// ------------------------------------------------------------------------>
// その他ツールバーのイベント
// home
let githubbutton = document.getElementById("home-button");
githubbutton.addEventListener("click", function(){
  location.href="https://nakashimas.github.io/";
});
// share
let sharebutton = document.getElementById("share-button");
sharebutton.addEventListener("click", function(){
  navigator.share(
    {
      title: document.title,
      text: document.title,
      url: "https://nakashimas.github.io"
    }
  );
});
// github
let githubbutton = document.getElementById("github-button");
githubbutton.addEventListener("click", function(){
  location.href="https://github.com/nakashimas";
});