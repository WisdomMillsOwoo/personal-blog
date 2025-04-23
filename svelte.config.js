import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import {resolve} from "path";

const config = {
	preprocess: vitePreprocess(),
	vite: {
		resolve: {
			alias: {
				$data: resolve("./src/data"),
			},
		},
	},
	kit: {
		adapter: adapter(),
		alias: {
			$lib: "src/lib",
			$data: "src/data",
		},}
};

export default config;
