<script>
    export let data;
    let { posts } = data;
</script>

<svelte:head>
    <title>Blog</title>
    <meta property="og:title" content="Blog" />
</svelte:head>

<div class="title">
    <h1>Blog</h1>
    <h2>Qualche pensiero, ogni tanto</h2>
</div>

<div class="content">
    <h2 id="box-title">Recenti</h2>
    <div class="box-container box-container-2">
        {#each posts as post}
            <a href={post.link}>
                <div class="box">
                    <h4>{post.title}</h4>
                    <p>{post.date}</p>
                    <div class="pill-container"><p class="pill {post.pill}">{post.tag}</p></div>
                </div>
            </a>
        {/each}
    </div>
</div>