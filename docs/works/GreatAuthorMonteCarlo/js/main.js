
// https://api.ce-cotoha.com/contents/
// http://kazemakase.wjg.jp/comics/pubcode2.php ISBN出版社
$.wait = function(msec){
    // openBDに連続してアクセスしないためのスリープ
    var d = new $.Deferred;
    setTimeout(function(){
        d.resolve(msec);
    }, msec);
    return d.promise();
};
$(function(){
  // ==========================================================================>
  // https://tr.you84815.space/animejs/controls.html
  // 幽霊を揺らすアニメーション
  $('#ghosttxt').text("(余裕)");
  let ghost_anime = anime.timeline({loop:true,autoplay:false,duration:200,delay:0});
  ghost_anime.add(
    {
    targets: '#ghost_writer',
    duration: 1500,
    keyframes: [
      {translateY: -10},
      {translateY: 10}
    ]
  }).add({
    targets: '#pop_book_1',
    rotate: 360
  }).add({
    targets: '#pop_book_2',
    rotate: 360
  }).add({
    targets: '#pop_book_3',
    rotate: 360
  });
  // 吹き出しを表示し，本を出すアニメーション
  hukidashi_anime = anime.timeline({loop:false,autoplay:false,duration:500});
  hukidashi_anime.add(
    {
    targets: '#hukidashi_child_1',
    translateX: 180,translateY: -180,
    backgroundColor: '#ffffff',
    scale: 5,
    rotate: "1turn"
  }).add(
    {
      targets: '#hukidashi_child_2',
      translateX: 208,translateY: -208,
      backgroundColor: '#ffffff',
      scale: 10,
      rotate: "1turn",
  }).add(
    {
      targets: '#hukidashi_child_3',
      translateX: 250,translateY: -250,
      backgroundColor: '#ffffff',
      scale: 15,
      rotate: 90,
  }).add(
    {
      targets: '#hukidashi_parent',
      translateX: 480,translateY: -300,
      backgroundColor: '#ffffff',
      scale: 90,
      rotate: 90,
  }).add(
    {
      targets: '#abook',
      translateX: 450,translateY: -290,
      scale: 3,
      rotate: 70
  }).add(
    {
    targets: '#booktitle',
    opacity: 1,
		color: "#ffffff"
  });
  // 開始ボタンのアニメーション
  button_anime = anime.timeline({loop:false,autoplay:false,duration:3000});
  button_anime.add(
    {
    targets: '#getresult',
    translateX: -650,translateY: 200,
    scale: 0,
  })
  // ==========================================================================>
  $(window).resize(function(){
  })
  // ==========================================================================>
  $('#getresult').click(function(e) {
    // クリックされた
    e.preventDefault();
    $('#ghosttxt').text("(やばい)");
    // ghostを揺らす
    hukidashi_anime.restart();
    hukidashi_anime.pause();
    button_anime.play()
    ghost_anime.play()
    // ========================================================================>
    function GetMorphemes(analysis_text){
      return new Promise(function(resolve,reject)
        {
          const DeveloperAPIBaseURL = "https://api.ce-cotoha.com/api/dev/nlp/v1/parse";
          const AccessTokenPublishURL = "https://api.ce-cotoha.com/v1/oauth/accesstokens";
          // アクセストークンを取得
          let postheader = new Headers();
          postheader.append("Content-Type","application/json; charset=utf-8")
          let postbody = {
                 grantType : "client_credentials",
                 clientId : DeveloperClientId,
                 clientSecret : DeveloperClientSecret
          };
          fetch(
            AccessTokenPublishURL,
            {
               method: 'POST',
               mode: "cors",
               dataType: 'json',
               headers : postheader,
               body: JSON.stringify(postbody),
            }
          ).then(response => response.json()
          ).then(CatchAccessToken
          ).catch(err => function(err){
            console.log("rejected:", err) // error
          })
        // ========================================================================>
        // 文章をPOSTする
        let morphemeslist = {};
        function GetmorphemesAPIBase(usertex,AccessToken){
          return new Promise(function(resolve,reject){
            $.wait(1000).done(function(){
              let textpostheader = new Headers();
              textpostheader.append("Content-Type","application/json; charset=utf-8");
              textpostheader.append("Authorization",`Bearer ${AccessToken}`);
              fetch(DeveloperAPIBaseURL,
                {
                 method: 'POST',
                 mode: "cors",
                 dataType : 'json',
                 headers : {
                   "Content-Type":"application/json; charset=utf-8",
                   Authorization:`Bearer ${AccessToken}`
                 },
                 body : JSON.stringify({
                   "sentence": usertex,
                   type: "kuzure"
                 })
                }
              ).then(response => response.json()
              ).then(function(resss){resolve(resss)}
              ).catch(err => function(err){
                console.log("rejected:", err) // error
              });
            });
          });
        };
        function CatchAccessToken(response){
          const AccessToken = response.access_token;
          let counts = 0;
          let usertex = analysis_text[counts];
          String(AccessToken,usertex);
          let gettmorphemes = GetmorphemesAPIBase(usertex,AccessToken);
          // 再帰で書くのが面倒なので，とりあえず直．後で直して(7/18)
          gettmorphemes.then(function(res){
            $('#ghosttxt').text("．．");
            counts++;
            let usertex = analysis_text[counts];
            String(usertex);
            SetRoot(res);
            CatchTextRequest(res);
            let gettmorphemes = GetmorphemesAPIBase(usertex,AccessToken);
            gettmorphemes.then(function(res){
              $('#ghosttxt').text("．．．");
              counts++;
              let usertex = analysis_text[counts];
              String(usertex);
              CatchTextRequest(res);
              let gettmorphemes = GetmorphemesAPIBase(usertex,AccessToken);
              gettmorphemes.then(function(res){
                $('#ghosttxt').text("．．．．");
                counts++;
                let usertex = analysis_text[counts];
                String(usertex);
                CatchTextRequest(res);
                let gettmorphemes = GetmorphemesAPIBase(usertex,AccessToken);
                // このpromiseを終了
                resolve(morphemeslist);
              });
            });
          });
        };
        // ========================================================================>
        function SetRoot(response){
          const morphemes = response.result;
          morphemeslist["roottitle"] = [];
          for(let i = 0; i < morphemes.length; i++){
            for(let j = 0; j < morphemes[i].tokens.length; j++){
              morphemeslist["roottitle"].push(morphemes[i].tokens[j].pos)
            }
          };
        };
        function CatchTextRequest(response){
          const morphemes = response.result;
          for(let i = 0; i < morphemes.length; i++){
            for(let j = 0; j < morphemes[i].tokens.length; j++){
              if(morphemeslist[morphemes[i].tokens[j].pos] == undefined){
                morphemeslist[morphemes[i].tokens[j].pos] = [];
                morphemeslist[morphemes[i].tokens[j].pos].push(morphemes[i].tokens[j].form);
              }else{
                morphemeslist[morphemes[i].tokens[j].pos].push(morphemes[i].tokens[j].form);
              }
            }
          }
        };
      });
    };
    // ========================================================================>
    // titleをとる
    function GetBookTitle(){
      // ======================================================================>
      return new Promise(function(resolve,reject)
        {
          $.get("https://api.openbd.jp/v1/coverage",TitleAnalysis);
          // ==================================================================>
          function list_random(arrayData) {
            var arrayIndex = Math.floor(Math.random() * arrayData.length);
            return arrayData[arrayIndex];
          };
          function TitleAnalysis(res){
            let titles = [];
            let booknumber = 1; // 候補の表示をする本
            for(let i=0;i<10;i++){
              $.wait(1000).done(function(){
                let isbn = list_random(res);
                let OpenBDAPIBaseURL = "https://api.openbd.jp/v1/get?isbn=" + String(isbn);
                $.getJSON(OpenBDAPIBaseURL,
                  function(data) {
                  if( data[0] == null ) {
                  } else {
                    // ヒットした場合の処理
                    let title = String(data[0].summary.title);
                    $('#pop_book_'+booknumber).text(title.slice(0,5));
                    booknumber++;
                    titles.push(title);
                    if(titles.length >= 3){
                      $('#ghosttxt').text("．");
                      resolve(titles);
                    };
                  };
                });
              });
            };
          };
          // ==================================================================>
        });
    };
    function list_random(arrayData) {
      var arrayIndex = Math.floor(Math.random() * arrayData.length);
      return arrayData[arrayIndex];
    };
    function SetRandomTitle(morphemejson){
      let title = "";
      for(let i = 0; i < morphemejson.roottitle.length; i++){
        let pos = morphemejson.roottitle[i];
        if(pos == "roottitle"){}
        else{
          title = title+String(list_random(morphemejson[pos]));
        }
      };
      hukidashi_anime.play();
      $('#ghosttxt').text("!");
      $('#booktitle').text(String(title));
      ghost_anime.restart();
      ghost_anime.pause();
      button_anime.restart();
      button_anime.pause();
      console.log(String(title));
    };
    // ========================================================================>
    function SetBookTitle(res){
      let booktitle = GetBookTitle();
      booktitle.then(function(res){
        console.log(res);
        Morpheme = GetMorphemes(res);
        Morpheme.then(function(resp){
          SetRandomTitle(resp)
        });
      });
    };
    SetBookTitle();
    // ========================================================================>
  });
});
