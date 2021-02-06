// 2021 © alombi

function switchTheme(){
   const body = document.getElementsByTagName('body')[0];
   const switchButton = document.getElementById('theme');
   const switchLink = document.getElementById('themeButton');
   // Switch
   if(body.classList.value == 'glass'){
      body.classList.remove('glass');
      switchButton.innerHTML = 'glass theme';
      switchLink.href = '/'
   }else{
      body.classList.add('glass');
      switchButton.innerHTML = 'default theme';
   }
}

function setTheme(){
   const body = document.getElementsByTagName('body')[0];
   const switchButton = document.getElementById('theme');
   if(window.location.href.indexOf('#glass') != -1){
      body.classList.add('glass');
      switchButton.innerHTML = 'default theme';
   }
}