
const veroviocontents = document.getElementsByClassName("verovio-content");
let mscore;
let veroviocontent;
let veroviocontents_container = [];
for(let i = 0; i < veroviocontents.length; i++){
  mscore = veroviocontents[i].innerHTML;
  // innerHTMLが書き換えられるので注意
  veroviocontent = new Verovio.App(
    veroviocontents[i],
    {
      defaultView: 'document', // instead of 'responsive' by default
      defaultZoom: 2 // 0-7, default is 3
    }
  );
  // 非同期処理よくわからないけど、オブジェクトを上書き、解放しなかったらいけた
  veroviocontents_container.push(veroviocontent);
  // Load a file (MEI or MusicXML)
  fetch(mscore).then(function(response) 
  {
    return response.text();
  }).then(function(text)
  {
    veroviocontents_container[i].loadData(text);
  });
}