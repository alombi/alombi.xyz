<script>
   import Header from '$lib/components/Header.svelte';
   import posts from './blog/posts.json';

   let count = posts.length;
</script>

<Header show={true} lang="it" destination="/" />
<div class="title">
   <div>
      <h1>Blog</h1>
      <h2>Non so cosa scrivere qua</h2>
   </div>
   <div class="posts-counter">
      <h1>{count}</h1>
   </div>
</div>

<div class="sections posts">
{#each posts as post}
   <div class="section post">
      <h4 class="section-h4">{post.tag}</h4>
      <h2 class="section-title">{post.title}</h2>
      <p class="section-p">{@html post.desc}</p>
      <a href={post.link} class="section-link button">Leggi <i class="fas fa-chevron-right"></i></a>
   </div>
{/each}
</div>