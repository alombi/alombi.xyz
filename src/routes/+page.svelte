<script>
    import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
    <title>alombi</title>
</svelte:head>

<Header lang="en" />
<div class="title">
    <h1>Welcome!</h1>
    <h2>19, student & programmer</h2>
</div>

<div class="content">
    <h2>Recently updated </h2>
    <div class="box-container">
        <a class="box-a" target="_blank" rel="noreferrer" href="https://github.com/alombi/alombi.xyz">
            <div class="box">
                <h4>alombi.xyz </h4>
                <p>My personal website</p>
                <div class="pill-container"><p class="pill orange">sveltekit</p></div>
            </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/alombi/rh-api">
            <div class="box">
                <h4>rh-api</h4>
                <p>An unofficial routinehub.co API</p>
                <div class="pill-container"><p class="pill light-blue">nextjs</p></div>
            </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/shareablehq/shareable">
            <div class="box">
                <h4>Shareable </h4>
                <p>A web platform to share and browse Scriptable's scripts</p>
                <div class="pill-container"><p class="pill orange">sveltekit</p></div>
            </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/alombi/earthquakes">
            <div class="box">
                <h4>earthquakes</h4>
                <p>A web application for monitoring earthquakes in Italy</p>
                <div class="pill-container"><p class="pill yellow">javascript</p></div>
            </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/alombi/otium">
            <div class="box">
                <h4>otium</h4>
                <p>Book manager and bookshelf organiser</p>
                <div class="pill-container"><p class="pill orange">sveltekit</p></div>
            </div>
        </a>
    </div>
</div>
<br><br>