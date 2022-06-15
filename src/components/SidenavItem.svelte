<script>
	import { page } from '$app/stores';
	import {buildPageUrl} from "$lib/buildPageUrl";

	export let data;
	export let indent = 0;

	let open = true;
</script>

<a href="{buildPageUrl(data.title, data.id)}">
	<div
		style="padding-left: {4 + indent}px;"
		class="py-1 hover:bg-gray-300 dark:hover:bg-slate-700"
		class:font-bold={data.id === $page.params.id}
	>
		{data.title}
	</div>
</a>

{#if open && data.children.page.results !== []}
	{#each data.children.page.results as child}
		<svelte:self data={child} indent={indent + 8} />
	{/each}
{/if}
