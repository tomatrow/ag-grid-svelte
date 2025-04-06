import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community"
import { unmount, mount, type Snippet } from "svelte"
import CellRenderer from "./CellRenderer.svelte"

export interface AgGridSvelteSnippetRendererParams<TData> extends ICellRendererParams<TData> {
	snippet: Snippet<[{ params: ICellRendererParams<TData> }]>
}

export class AgGridSvelteSnippetRendererComp<TData> implements ICellRendererComp<TData> {
	private element?: HTMLElement
	private instance?: ReturnType<typeof mount>
	static isSvelteFrameworkComponent = true

	init(params: AgGridSvelteSnippetRendererParams<TData>) {
		this.element = document.createElement("div")
		this.element.style.display = "contents"
		this.instance = mount(CellRenderer, {
			target: this.element,
			props: { params }
		})
	}

	getGui() {
		return this.element!
	}

	destroy() {
		if (this.instance) {
			unmount(this.instance)
			this.instance = undefined
		}
		if (this.element) {
			this.element.remove()
			this.element = undefined
		}
	}

	refresh() {
		return false
	}
}
