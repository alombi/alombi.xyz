<script>
   import posts from './blog/posts.json'
   let lastPost = posts[0]
</script>
<div>
   <div class="title">
      <div>
         <h1>alombi</h1>
         <h2>Welcome to my website.</h2>
         <div class="links">
            <a id="github" href="https://github.com/alombi" target="_blank"><i class="fab fa-github"></i> GitHub</a>
            <a id="repo" href="https://alombi.github.io/repo" target="_blank"><i class="fas fa-hammer"></i> JB Repo</a>
         </div>
      </div>
      <img src="https://avatars.githubusercontent.com/u/62696529?v=4" alt="">
   </div>
   <div class="sections">
      <div class="section">
         <h4 class="section-h4">English</h4>
         <h2 class="section-title">Code</h2>
         <p class="section-p">Highlighted project: <a href="">Otium</a></p>
         <a class="section-link" href="/code">Browse projects <i class="fas fa-chevron-right"></i></a>
      </div>
      <div class="section">
         <h4 class="section-h4">Italiano</h4>
         <h2 class="section-title">Blog</h2>
         <p class="section-p">Ultimo post: <a href={lastPost.link}>{lastPost.title}</a></p>
         <a href="/blog" class="section-link">Leggi i post <i class="fas fa-chevron-right"></i></a>
      </div>
   </div>
</div>