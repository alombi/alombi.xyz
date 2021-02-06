// 2021 © alombi

function switchTheme(){
   const body = document.getElementsByTagName('body')[0];
   const switchButton = document.getElementById('theme');
   // Switch
   if(body.classList.value == 'glass'){
      body.classList.remove('glass');
      switchButton.innerHTML = 'glass theme';
   }else{
      body.classList.add('glass');
      switchButton.innerHTML = 'default theme';
   }
}