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