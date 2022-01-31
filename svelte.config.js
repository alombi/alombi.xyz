import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex"
import sveltePreprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", '.svx'],
	preprocess: [mdsvex({
		layout:{blog:"./src/routes/blog/layout.svelte"}
	}), sveltePreprocess()],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
