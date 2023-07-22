
let isNavigationCollapsed = true;
let currentPageNumber = 1;

// ------------------------------------------------------------------------------------------------>

const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000))

function tan(w, h){
    return h / w;
}

function applyPage(page, lambda){
    for(var i of page.getElementsByClassName("line")){
        lambda(i);
    }
    for(var i of getHeader().getElementsByClassName("line")){
        lambda(i);
    }
    for(var i of getFooter().getElementsByClassName("line")){
        lambda(i);
    }
}

// ------------------------------------------------------------------------------------------------>

function popClassLike(target, regex){
    const targetClassList = target.className;
    const myRegExp = new RegExp(regex, 'g');
    const myMatched = targetClassList.match(myRegExp) || [];

    for(let n = 0; n < myMatched.length; n++) {
        target.classList.remove(myMatched[n]);
    }

    return myMatched;
}

function popLength(target){
    return popClassLike(target, /\blength-\S+/);
}

function popLengthOverwrite(target){
    return popClassLike(target, /\blength-overwrite-\S+/);
}

function popLengthAll(){
    applyPage(getCurrentPage(), (i) => {popLength(i)});
}

function popLengthOverwriteAll(){
    applyPage(getCurrentPage(), (i) => {popLengthOverwrite(i)});
}

// ------------------------------------------------------------------------------------------------>

function setPage(pageNumber){
    document.getElementById("main").dataset.pageNumber = pageNumber;
}

function setLength(elm, lengthNum){
    popLength(elm);
    elm.classList.add("length-" + lengthNum);
}

function setLengthOverwrite(elm, lengthNum){
    popLengthOverwrite(elm);
    elm.classList.add("length-overwrite-" + lengthNum);
}

function setLengthAll(lengthNum){
    applyPage(getCurrentPage(), (i) => {setLength(i, lengthNum)});
}

function setLengthOverwriteAll(lengthNum){
    applyPage(getCurrentPage(), (i) => {setLengthOverwrite(i, lengthNum)});
}

function setDisplay(page, isDisplay){
    const lines = page.getElementsByClassName("line");
    const dpy = isDisplay ? "visible" : "hidden";

    for (let i = 0; i < lines.length; i++){
        lines[i].style.visibility = dpy;
    }
}

// ------------------------------------------------------------------------------------------------>

function getPage(pageNumber){
    return document.getElementById("page-" + pageNumber);
}

function getCurrentPage(){
    return getPage(document.getElementById("main").dataset.pageNumber);
}

function getHeader(){
    return document.getElementById("header");
}

function getFooter(){
    return document.getElementById("footer");
}

// ------------------------------------------------------------------------------------------------>

function toggleHiddenAll(){
    applyPage(getCurrentPage(), (i) => {i.classList.toggle("line-hidden")});
}

function toggleShow(elm){
    if (!isNavigationCollapsed){
        onNavigationButton()
    }
    toggleHiddenAll();
    popLengthOverwriteAll();
    elm.classList.toggle("line-hidden");
    elm.classList.toggle("line-show");
}

function removeHiddenAll(){
    applyPage(getCurrentPage(), (i) => {i.classList.remove("line-hidden")});
}

function removeShowAll(){
    applyPage(getCurrentPage(), (i) => {i.classList.remove("line-show")});
}

// ------------------------------------------------------------------------------------------------>

function resetNavigationSize(){
    let navH = document.getElementById("navigation-button").getBoundingClientRect().height;
    let navW = document.getElementById("navigation-button").getBoundingClientRect().width;
    let navTan = navH / navW;
    document.documentElement.style.setProperty("--navigation-deg", (Math.atan(navTan) * 180 / Math.PI) + "deg");
    document.documentElement.style.setProperty("--navigation-width", Math.sqrt((navH * navH) + (navW * navW)) + "px");
}

function resetNavigationLength(navigationLengthData){
    setLength(document.getElementById("line-top-2"), navigationLengthData.charAt(0));
    setLength(document.getElementById("line-top-3"), navigationLengthData.charAt(1));
    setLength(document.getElementById("line-top-4"), navigationLengthData.charAt(2));
    setLength(document.getElementById("line-bottom-1"), navigationLengthData.charAt(3));
    setLength(document.getElementById("line-bottom-2"), navigationLengthData.charAt(4));
    setLength(document.getElementById("line-bottom-3"), navigationLengthData.charAt(5));
}

function resetContentLength(contentLengthData){
    const lines = getCurrentPage().children;
    for (let i = 0; i < lines.length; i++){
        setLength(lines[i], contentLengthData.charAt(i))
    }
}

async function resetPage(){
    let elt = getCurrentPage();

    if (elt == null){
        setPage("1");
        elt = getCurrentPage();
    }

    setDisplay(elt, true);
    resetNavigationLength(elt.dataset.navigationLength);
    resetContentLength(elt.dataset.contentLength);
    
    await sleep(0.2);
    toggleHiddenAll();
}

// ------------------------------------------------------------------------------------------------>

function closeNavigation(){
    popLengthOverwriteAll();
    document.getElementById("navigation-button").classList.add("navigation-button-collapsed");
    isNavigationCollapsed = true;
}

function openNavigation(){
    setLengthOverwriteAll("1");
    for(var i of document.getElementById("navigation-items").getElementsByClassName("line")){
        setLengthOverwrite(i, "6");
    }
    document.getElementById("navigation-button").classList.remove("navigation-button-collapsed");
    isNavigationCollapsed = false;
}

// ------------------------------------------------------------------------------------------------>

function onWindowResize(){
    const bottomElements = document.getElementById("footer").getElementsByClassName("line-bottom");
    const bottomElement = bottomElements[bottomElements.length - 1];
    const bottomRect = bottomElement.getBoundingClientRect();
    document.documentElement.style.setProperty("--vh", bottomRect.bottom + "px");
    resetNavigationSize();
}

function onNavigationButton(){
    resetNavigationSize();
    if (isNavigationCollapsed) {
        openNavigation();
    } else {
        closeNavigation();
    }
}

// ------------------------------------------------------------------------------------------------>

async function togglePortfolio(){
    await changePage("99");
    await sleep(0.4);
    toggleHiddenAll();
}

async function changePage(pageNumber){
    const elt = getCurrentPage();
    closeNavigation();
    toggleHiddenAll();
    await sleep(0.2);
    setDisplay(elt, false);
    await sleep(0.2);
    setPage(pageNumber);
    await resetPage();
}

async function nextPage(){
    const pageNumber = parseInt(document.getElementById("main").dataset.pageNumber);
    if (pageNumber + 1 >= 100) {
        await changePage("1");
    } else {
        await changePage(pageNumber + 1);
    }
}

async function prevPage(){
    const pageNumber = parseInt(document.getElementById("main").dataset.pageNumber);
    if (pageNumber - 1 <= 0) {
        await changePage("1");
    } else {
        await changePage(pageNumber - 1);
    }
}

// ------------------------------------------------------------------------------------------------>

window.addEventListener('load', async function() {
    const searchParams = new URLSearchParams(window.location.search);
    await resetPage();
    onWindowResize();
    if(searchParams.has('page')){
        const page = searchParams.get('page');
        if (page == '99') {
            await changePage(page);
        } else if(page == '0') {
            if(searchParams.has('content')){
                const num = searchParams.get('content');
                switch(num){
                    case '0':
                        toggleShow(document.getElementById('line-top-2'));
                        break;
                    case '1':
                        toggleShow(document.getElementById('line-top-3'));
                        break;
                    case '2':
                        toggleShow(document.getElementById('line-top-4'));
                        break;
                    case '3':
                        toggleShow(document.getElementById('line-bottom-1'));
                        break;
                    case '4':
                        toggleShow(document.getElementById('line-bottom-2'));
                        break;
                    case '5':
                        toggleShow(document.getElementById('line-bottom-3'));
                        break;
                }
            }
        } else {
            await changePage(page);
            if(searchParams.has('content')){
                const lines = getCurrentPage().children;
                const num = parseInt(searchParams.get('content')) - 1;
                if(lines.length > num){
                    await toggleShow(lines[num]);
                }
            }
        }
    }
})

window.addEventListener('resize', function() {
    closeNavigation();
    onWindowResize();
})

// ------------------------------------------------------------------------------------------------>
