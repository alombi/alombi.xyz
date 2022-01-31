<script>
   import Header from '$lib/components/Header.svelte';
   import posts from './blog/posts.json';

   let count = posts.length;
</script>

<svelte:head>
   <title>Blog</title>
</svelte:head>

<Header show={true} lang="it" destination="/" />
<div class="title">
   <div>
      <h1>Blog</h1>
      <h2 id="no-mobile">"Così scoprì la virtù paradossale della lettura, che è quella di astrarci dal mondo per trovargli un senso."</h2>
   </div>
   <div class="posts-counter">
      <h1>{count}</h1>
   </div>
   <h2 id="mobile">"Così scoprì la virtù paradossale della lettura, che è quella di astrarci dal mondo per trovargli un senso."</h2>
</div>

<div class="sections posts">
{#each posts as post}
   <div class="section post">
      <h4 class="section-h4">{post.tag} - {post.date}</h4>
      <h2 class="section-title">{post.title}</h2>
      <p class="section-p">{@html post.desc}</p>
      <a href={post.link} class="section-link button">Leggi <i class="fas fa-chevron-right"></i></a>
   </div>
{/each}
</div>

<style>
   @media(max-width:350px){
      h1{
        margin-top: 20px; 
      }
   }
   h2{
      font-size:16px;
      font-weight:500;
   }
</style>