<script>
	import { page } from '$app/stores';
	import { getConfluencePageHierarchy } from '$lib/getConfluencePageHierarchy';
	import SidenavItem from './SidenavItem.svelte';
</script>

<!-- This code is inspired by https://svelte.dev/repl/347b37e18b5d4a65bbacfd097536db02?version=3.24.0 -->

{#await getConfluencePageHierarchy($page.params.id)}
	{#each [1, 2, 3, 4, 5] as num}
		<div class="animate-pulse bg-gray-300 w-full h-8 mb-8" />
	{/each}
{:then data}
	{#each data.results as result}
		<SidenavItem data={result} />
	{/each}
{:catch error}
	Oops, an error occurred.ConfluenceSlug.
{/await}
