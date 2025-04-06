<script lang="ts">
	import { AgGridSvelte, AgGridSvelteSnippetRendererComp } from "$lib"
	import { type GridOptions, type ICellRendererParams, AllCommunityModule } from "ag-grid-community"

	interface Todo {
		id: string
		task: string
		done: boolean
	}

	const todos: Todo[] = $state([])
	const addButtonRow: Todo = { id: "add-button-row", task: "", done: false }

	const options: GridOptions<Todo> = $derived({
		rowData: [...todos, addButtonRow],
		getRowId: ({ data }) => data.id,
		getRowClass(row) {
			if (row.data?.id !== addButtonRow.id) return

			return "add-button-row"
		},
		domLayout: "autoHeight",
		columnDefs: [
			{
				headerName: "#",
				width: 70,
				sortable: false,
				filter: false,
				cellRenderer: AgGridSvelteSnippetRendererComp,
				cellRendererParams: (params: ICellRendererParams<Todo>) => ({
					snippet: addRowCell,
					...params
				})
			},
			{
				flex: 1,
				field: "task",
				cellClass(row) {
					if (row.data?.id === addButtonRow.id) return "hidden-cell"
				},
				enableCellChangeFlash: true,
				editable: ({ data }) => data?.id !== addButtonRow.id,
				onCellValueChanged(event) {
					const todo = todos.find((todo) => todo.id === event.data.id)
					if (!todo) return
					const task = (event.newValue as string | null) ?? ""
					todo.task = task
				}
			},
			{
				flex: 1,
				field: "done",
				enableCellChangeFlash: true,
				cellClass(row) {
					if (row.data?.id === addButtonRow.id) return "hidden-cell"
				},
				editable: ({ data }) => data?.id !== addButtonRow.id,
				onCellValueChanged(event) {
					const todo = todos.find((todo) => todo.id === event.data.id)
					if (!todo) return
					todo.done = !!event.newValue
				}
			},
			{
				flex: 1,
				sortable: false,
				filter: false,
				cellClass(row) {
					if (row.data?.id === addButtonRow.id) return "hidden-cell"
				},
				cellRenderer: AgGridSvelteSnippetRendererComp,
				cellRendererParams: (params: ICellRendererParams<Todo>) => ({
					snippet: deleteRowCell,
					...params
				})
			}
		]
	})
</script>

{#snippet addRowCell({ params }: { params: ICellRendererParams<Todo> })}
	{#if params.data?.id === addButtonRow.id}
		<button
			class="add-row-button"
			onclick={() => todos.push({ id: crypto.randomUUID(), task: "", done: false })}
		>
			Add
		</button>
	{:else}
		{(params.node.rowIndex ?? 0) + 1}
	{/if}
{/snippet}

{#snippet deleteRowCell({ params }: { params: ICellRendererParams<Todo> })}
	{@const index = todos.findIndex((todo) => todo.id === params.data?.id)}
	{#if index !== -1}
		<button onclick={() => todos.splice(index, 1)}>❌</button>
	{/if}
{/snippet}

<div class="grid-container">
	<AgGridSvelte class="grid" {options} params={{ modules: [AllCommunityModule] }} />
</div>

<style>
	.grid-container {
		:global {
			.grid {
				.hidden-cell {
					display: none;
				}
			}
		}
	}
</style>
