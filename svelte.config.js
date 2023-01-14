import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
		  extensions: ['.md'],
		  layout: "./src/lib/components/Layout.svelte"
		})
	  ]

};

export default config;