$(document).ready(function() {
	if( !localStorage.getItem('disp_popup') ) {
		// localStorage.setItem('disp_popup', 'on');
		// $("body").addClass('first-time');

		// applyPage(getPage("1"), (elm) => {
		// 	elm.addEventListener("click", function() {
		// 		showTutorialAbbr();
		// 	});
		// });
	}

	prepareBoxes();
	VerovioUpdate(true);

	"use strict";
	// Scroll to top
	$("a[href='#top']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
	});

	// Smooth scroll
	$('a.scroll-to').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 700);
		event.preventDefault();
	});

	$('.site-testimonial-item').on('mouseenter', function(){
		$('.site-testimonial-item').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
		});
		$('.site-testimonial-item').on('mouseleave', function(){
		$('.site-testimonial-item').removeClass('inactive');
		$('.site-testimonial-item').removeClass('active');
	});
});

$(window).on('resize', function() {
	// VerovioUpdate();
});

$(window).on('scroll', function () {
	var windscroll = $(window).scrollTop();
	if (windscroll >= 100) {
	$('.site-navigation').addClass('nav-bg');
	} else {
	$('.site-navigation').removeClass('nav-bg');
	}
});

function VerovioUpdate(initFlag){
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
				defaultZoom: 2, // 0-7, default is 3
				enableResponsive: false
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
}

// ------------------------------------------------------------------------>
// ------------------------------------------------------------------------>
/*
	Copyright Robert Nyman, http://www.robertnyman.com
	Free to use if this text is included	
  Here's the function that allows us to retrieve elements by their class name, 
  something that everyone wishes were part of JavaScript to begin with.  
  To read more about it, visit Robert Nyman's site.
*/
function getElementsByClassName(oElm, strTagName, strClassName){
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];		
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}	
	}
	return (arrReturnElements)
}
/*
  Below are the functions that let me add and remove classes, which I'm using to get the hover effect.  
  "hovering" is the class that is added or removed, and you can see in the style sheet how .
  hovering is defined.
*/
function addClassName(oElm, strClassName){
	var strCurrentClass = oElm.className;
	if(!new RegExp(strClassName, "i").test(strCurrentClass)){
		oElm.className = strCurrentClass + ((strCurrentClass.length > 0)? " " : "") + strClassName;
	}
}
function removeClassName(oElm, strClassName){
	var oClassToRemove = new RegExp((strClassName + "\s?"), "i");
	oElm.className = oElm.className.replace(oClassToRemove, "").replace(/^\s?|\s?$/g, "");
}
/*
  Here's the part I wrote that uses the functions above to create our "link boxes".
*/
function prepareBoxes() {
	var boxes = getElementsByClassName(document, "div", "linkbox");
	for (var i=0; i<boxes.length; i++){
		var fullstories = getElementsByClassName(document, "p", "fullstory");
		for (var k=0; k<fullstories.length; k++){
			fullstories[k].parentNode.tabIndex = k+1;
			fullstories[k].style.display = "none";
			fullstories[k].parentNode.onmouseover = function() {
				addClassName(this, "hovering");
			}
			fullstories[k].parentNode.onmouseout = function() {
				removeClassName(this, "hovering");
			}
			fullstories[k].parentNode.onclick = function() {
				var destin = this.getElementsByTagName("a");
				window.location = destin[0].href;
			}
			fullstories[k].parentNode.onkeypress = fullstories[k].parentNode.onclick;
		}
	}
}

async function showTutorial(elm){
	elm.classList.add('play');
	buttons.style.display = 'none';
	pList = new Array();
	for (i of elm.getElementsByClassName('row')){
		if (i.classList.contains('parent')) {
			for (j of pList){
				j.style.opacity = 0.2;
			}
		}
		if (elm.classList.contains('play')) {
			i.classList.add("show");
		}
		await sleep(2.4);
		pList.push(i);
	}
	await sleep(4.8);
	closeTutorial(elm);
}

function closeTutorial(elm){
	for (i of elm.getElementsByClassName('row')) {
		i.classList.remove("show");
	}
	elm.classList.remove('play');
}

function showTutorialAbbr(){
	const tutorial = document.getElementById('site-hero-overlay');
	if (tutorial.classList.contains('play')) {
		closeTutorial(tutorial);
		// チュートリアル中断メッセージを出す場合以下に記述
	}
}
// ------------------------------------------------------------------------>
// ------------------------------------------------------------------------>
