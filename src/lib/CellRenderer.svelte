<script lang="ts" generics="TData">
	import { type AgGridSvelteSnippetRendererParams } from "./AgGridSvelteSnippetRendererComp"

	const { params }: { params: AgGridSvelteSnippetRendererParams<TData> } = $props()
</script>

{@render params?.snippet?.({ params })}
