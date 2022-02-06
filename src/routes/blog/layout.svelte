<script>
	import Header from '$lib/components/Header.svelte';
	// These props get filled in from the page's front matter
	export let title
	export let date
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<Header show={true} lang="it" destination="/blog" />
<article>
   <div class="title">
		<h4>{date}</h4>
      <h1>{title}</h1>
   </div>
</article>

<div class="text">
	<slot></slot>
</div>

<style>
	h4{
		font-size: 0.8rem;
   	opacity: 0.6;
      text-transform: uppercase;
		}
		h1{
			margin-top:-50px;
		}
	.title{
			text-align: center;
			flex-direction: column;
		}
	.text{
		color:#333;
		width:70vw;
		margin:auto;
		font-size:17px;
	}
	@media (prefers-color-scheme: dark){
		.text{
			color: #D3D7DC;
		}
	}
	@media (max-width:950px) {
		.text{
			width: 95vw;
		}
	}
	@media (max-width:550px){
		.title{
			flex-direction: unset;
		}
		h1{
			margin-top: -15px;
			padding-left: 1px;
			padding-right: 1px;
		}
	}
</style>