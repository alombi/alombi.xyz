//code by @alombi. 2020 alombi

//Navbar functions (open)
function openNav() {
    document.getElementById('navbar').style.display = 'block';
	document.getElementById('page').style.display = 'none';
};

//Navbar functions (close)
function closeNav() {
    document.getElementById('navbar').style.display = 'none';
	document.getElementById('page').style.display = 'block';
}
// table of contents
function openTable(){
    document.getElementById('table_of_contents').style.display = 'block';
	document.getElementById('main').style.display = 'none';
}

function closeTable(){
    document.getElementById('table_of_contents').style.display = 'none';
	document.getElementById('main').style.display = 'block';
}