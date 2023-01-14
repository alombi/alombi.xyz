<script>
    export let lang;
    let url = '/'
    if(lang == 'it'){
        url = '/it'
    }
</script>

<div class="fake-nav"></div>
<nav>
    <div>
        <a href={url} class="name">alombi</a>
        {#if lang == 'it'}
            <a href="/it/blog">Blog</a>
            <a href="/it/progetti">Progetti</a>
        {/if}
        {#if lang == 'en'}
            <a target="_blank" rel="noreferrer" href="https://github.com/alombi">github</a>
        {/if}
    </div>
    <div>
        {#if lang == 'en'}
            <a href="/contacts">Contacts</a>
        {:else}
            <a target="_blank" href="https://github.com/alombi/alombi.xyz">Codice sorgente</a>
        {/if}
    </div>
</nav>


<style>
.fake-nav{
   position: fixed;
   top:0;
   left:0;
   width: 100%;
   height:50px;
   background-color: white;
   opacity: .6;
   z-index:3;
}
nav {
   position: fixed;
   top:0;
   left:0;
   width: 100%;
   height:50px;
   -webkit-backdrop-filter: blur(20px);
   backdrop-filter: blur(20px);
   z-index: 3;
}
@media (prefers-color-scheme: dark){
    .fake-nav{
        background-color: #1c1c1c;
    }
}
</style>