import { VanillaFrameworkOverrides } from "ag-grid-community"

export class SvelteFrameworkOverrides extends VanillaFrameworkOverrides {
	getDocLink() {
		return "https://www.npmjs.com/package/@tomatrow/ag-grid-svelte"
	}
}
