<script lang="ts">
	import { AgGridSvelte, AgGridSvelteSnippetRendererComp } from "$lib"
	import { type GridOptions, type ICellRendererParams, AllCommunityModule } from "ag-grid-community"

	interface Coffeehouse {
		name: string
		address: string
		isGoated: boolean
	}

	const coffeehouses: Coffeehouse[] = $state([
		{
			name: "Vinaka Cafe",
			address: `300 Carlsbad Village Dr Unit 211 Carlsbad, CA 92008 United States`,
			isGoated: true
		},
		{
			name: "The Cup Coffee",
			address: `206 Wisconsin Ave Oceanside, CA  92054 United States`,
			isGoated: true
		},
		{
			name: "Panikin Coffee & Tea",
			address: `510 N Coast Hwy 101 Encinitas, CA  92024 United States`,
			isGoated: true
		}
	])

	const options: GridOptions<Coffeehouse> = $derived({
		rowData: coffeehouses,
		getRowId: ({ data }) => data.name,
		domLayout: "autoHeight",
		columnDefs: [
			{ field: "name" },
			{ field: "address" },
			{
				field: "isGoated",
				cellRenderer: AgGridSvelteSnippetRendererComp,
				cellRendererParams: (params: ICellRendererParams<Coffeehouse>) => ({
					snippet: customToggleCell,
					...params
				})
			}
		]
	})
</script>

{#snippet customToggleCell({ params: { data } }: { params: ICellRendererParams<Coffeehouse> })}
	<button class:is-goated={data!.isGoated} onclick={() => (data!.isGoated = !data!.isGoated)}>
		<b>GOAT</b>
	</button>
{/snippet}

<AgGridSvelte {options} params={{ modules: [AllCommunityModule] }} />

<style>
	button {
		width: 100%;
		height: 100%;
		color: red;

		&.is-goated {
			background-position: 55% 45%;
			background-repeat: no-repeat;
			background-image: url(/goat.jpg);
		}
	}
</style>
