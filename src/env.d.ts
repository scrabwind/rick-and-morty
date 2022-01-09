/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
interface ImportMetaEnv {
	readonly VITE_ELEMENTS_PER_PAGE: string
	readonly VITE_API_PAGE_SIZE: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
