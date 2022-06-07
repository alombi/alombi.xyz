<script>
   import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
   <title>Projects</title>
</svelte:head>

<Header show={true} lang="en" destination="/" />
<div class="title">
   <h1>Projects</h1>
</div>
<div class="sections">
   <div class="section">
      <p class="section-h4">SvelteKit and Supabase</p>
      <h2 class="section-title">Otium</h2>
      <p class="section-p">A free and open source book manager and bookshelf organiser</p>
      <a href="https://github.com/alombi/otium" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">
      <p class="section-h4">Typescript</p>
      <h2 class="section-title">Weather Plugin</h2>
      <p class="section-p">A plugin for Obsidian.md that shows current weather for a specific location in the status bar.</p>
      <a href="https://github.com/alombi/obsidian-weather-plugin" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   
   <div class="section">
      <p class="section-h4">Svelte and NodeJS</p>
      <h2 class="section-title">Latest earthquakes in Italy</h2>
      <p class="section-p">A fast and beautiful web app for checking latest earthquakes in Italy, with interactive maps</p>
      <a href="https://github.com/alombi/earthquakes" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">
      <h4 class="section-h4">Svelte</h4>
      <h2 class="section-title">Formula One Dashboard</h2>
      <p class="section-p">A web application for checking the F1 championship's chart</p>
      <a target="_blank" href="https://github.com/alombi/f1-championship" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">
      <p class="section-h4">Python, JavaScript</p>
      <h2 class="section-title"> Unofficial RoutineHub API</h2>
      <p class="section-p">An unofficial API that scrapes the routinehub.co website and returns lots of data.</p>
      <a href="https://github.com/alombi/rh-api" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">
      <p class="section-h4">Svelte</p>
      <h2 class="section-title">iOS Settings URLS - Website</h2>
      <p class="section-p">A website for easily browse a large collection of URL schemes for the iOS Settings app.</p>
      <a href="https://github.com/alombi/ios-settings-urls-website" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">
      <p class="section-h4">JavaScript, CSS, XenHTML</p>
      <h2 class="section-title">Nyx</h2>
      <p class="section-p">Beautiful pill widgets on your lockscreen - a tweak for jailbroken devices.</p>
      <a href="https://github.com/alombi/nyx" target="_blank" class="section-link button">See project <i class="fas fa-external-link-alt"></i></a>
   </div>
   <div class="section">

   </div>
</div>


<style>
   .section:last-child{
      background-color: inherit;
   }
</style>
