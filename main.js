//code by @alombi. 2020 alombi

// table of contents
function openTable(){
    document.getElementById('table_of_contents').style.display = 'block';
	document.getElementById('main').style.display = 'none';
	document.getElementById('topnav').style.display = 'none';
}

function closeTable(){
    document.getElementById('table_of_contents').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('topnav').style.display = 'block';
}

// Resources
function hosting(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('hosting').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function subdomains(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('subdomains').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function editors(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('editors').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function remote(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('remote').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function css(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('css').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function others(){
    document.getElementById('main').style.opacity = 0.1;
    document.getElementById('others').style.display = 'block';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}

function close(){
    document.getElementById('hosting').style.display = 'none';
    document.getElementById('subdomains').style.display = 'none';
    document.getElementById('editors').style.display = 'none';
    document.getElementById('remote').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('others').style.display = 'none';
    document.getElementById('main').style.opacity = 1.0;
}