// 2021 © alombi

function isDarkModeEnabled() {
   return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function switchThemeGlass(){
   const body = document.getElementsByTagName('body')[0];
   const switchButton = document.getElementById('glass_theme');
   const switchLink = document.getElementById('glass_themeButton');
   // Switch
   if(body.classList.value == 'glass'){
      body.classList.remove('glass');
      switchButton.innerHTML = 'glass theme';
      switchLink.href = '/'
   }else{
      body.classList.add('glass');
      switchButton.innerHTML = 'default theme';
      const switchThemeDarkLightButton = document.getElementById('dark_light_theme');
      switchThemeDarkLightButton.style.display = 'none';
   }
}

function setTheme(){
   if(isDarkModeEnabled()){
      switchThemeDarkLight()
   }
   const body = document.getElementsByTagName('body')[0];
   const switchButton = document.getElementById('theme');
   if(window.location.href.indexOf('#glass') != -1){
      body.classList.add('glass');
      const switchThemeDarkLightButton = document.getElementById('dark_light_theme');
      switchThemeDarkLightButton.style.display = 'none';
   }  
}

function switchThemeDarkLight(){
   const body = document.getElementsByTagName('body')[0];
   const switchThemeDarkLightButton = document.getElementById('dark_light_theme');
   if(switchThemeDarkLightButton.name == 'moon-outline'){
      switchThemeDarkLightButton.name = 'sunny-outline';
      body.classList.add('dark');
   }else if(switchThemeDarkLightButton.name == 'sunny-outline'){
      switchThemeDarkLightButton.name = 'moon-outline';
      body.classList.remove('dark')
   }
}
