<script lang="ts" generics="TData">
	import { onMount } from "svelte"
	import { type HTMLAttributes } from "svelte/elements"
	import { type GridApi, type GridOptions, createGrid, type GridParams } from "ag-grid-community"
	import { SvelteFrameworkOverrides } from "./SvelteFrameworkOverrides"
	import { initialGridOptionsSet, type InitialGridOption } from "./initialGridOptionsSet"

	interface AgGridSvelteProps extends HTMLAttributes<HTMLDivElement> {
		element?: HTMLDivElement
		gridApi?: GridApi<TData>
		options?: GridOptions<TData>
		params?: GridParams
	}

	let {
		element = $bindable(),
		gridApi = $bindable(),
		options,
		params,
		...restProps
	}: AgGridSvelteProps = $props()

	onMount(() => {
		if (!element) return

		const svelteGridParams: GridParams = {
			frameworkOverrides: new SvelteFrameworkOverrides(),
			...params
		}

		gridApi = createGrid(element, options ?? {}, svelteGridParams)

		return () => {
			gridApi?.destroy()
		}
	})

	$effect(() => {
		const updatedOptions: GridOptions<TData> = {}
		const keys = Object.keys(options ?? {}) as (keyof GridOptions<TData>)[]

		for (const key of keys) {
			if (initialGridOptionsSet.has(key as InitialGridOption)) continue
			updatedOptions[key] = options?.[key]
		}

		gridApi?.updateGridOptions(updatedOptions)
	})
</script>

<div bind:this={element} {...restProps}></div>
