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
        <a href={url} class="name">home</a>
    </div>
    <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/alombi">github</a>
    </div>
</nav>


<style>
.fake-nav{
   position: fixed;
   top:0;
   left:0;
   width: 100%;
   height:50px;
   /* background-color: white; */
   background-color: #eee8d5;
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
        /* background-color: #1c1c1c; */
        /* background-color: #1e2030; */
        background-color: #073642;
    }
}
</style>