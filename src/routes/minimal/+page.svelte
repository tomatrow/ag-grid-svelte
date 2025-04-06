<script lang="ts">
	import { AgGridSvelte } from "$lib"
	import { AllCommunityModule } from "ag-grid-community"
</script>

<AgGridSvelte
	style="height: 80vh"
	params={{ modules: [AllCommunityModule] }}
	options={{
		// Row Data: The data to be displayed.
		rowData: [
			{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
			{ make: "Ford", model: "F-Series", price: 33850, electric: false },
			{ make: "Toyota", model: "Corolla", price: 29600, electric: false }
		],
		// Column Definitions: Defines the columns to be displayed.
		columnDefs: [{ field: "make" }, { field: "model" }, { field: "price" }, { field: "electric" }]
	}}
/>
