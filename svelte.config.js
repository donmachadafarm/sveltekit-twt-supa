import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
const dev = process.env.NODE_ENV === 'development'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        vite: {
            ssr: {
                noExternal: dev ? [] : ['@supabase/supabase-js']
            },
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;