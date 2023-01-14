<script>
	// These props get filled in from the page's front matter
	export let title
	export let date
	export let id
	//
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article class="text">
   <div class="blog-title">
		<h4>{date}</h4>
        <h1>{title}</h1>
   </div>
   <div class="text">
		<slot></slot>
	</div>
</article>



<style>
	h1{
		font-size: 31px;
	}
	h4{
		font-size: 0.8rem;
   	    opacity: 0.6;
        text-transform: uppercase;
	}
	.blog-title{
        text-align: center;
        flex-direction: column;
    	padding-bottom: 30px;
	}
	.text{
		width:70vw;
		margin:auto;
		padding-right: 10px !important;
	}
	@media (max-width:950px) {
		.text{
			width: 95vw;
		}
	}
	@media (max-width:550px){
		.blog-title{
			flex-direction: unset;
		}
		h1{
			margin-top: -15px;
			padding-left: 1px;
			padding-right: 1px;
		}
	}
</style>