<script>
	import { page } from '$app/stores';
	import { getConfluencePageData } from '$lib/getConfluencePageData';
	import RenderWikiContent from "../../../components/RenderWikiContent.svelte";
</script>

{#await getConfluencePageData($page.params.id)}
	<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 animate-pulse">
		<!-- 3 skeleton loader cards -->
		{#each [1, 2, 3] as item}
			<div
				class="drop-shadow-md border border-gray-300 dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-8 h-full transition ease-in-out bg-white"
			>
				<div class="w-36 h-8 bg-gray-300 mb-6" />
				<div class="w-full h-12 bg-gray-300" />
			</div>
		{/each}
	</div>
{:then data}
	<h1 class="section-heading">{data.title} <span class="text-sm">{data.id}</span></h1>

	<div class="mb-4 md:mb-8 border border-slate-900 dark:border-white"></div>

	<p>
		<RenderWikiContent data="{data}"/>
	</p>
{:catch error}
	<div class="my-4 bg-red-500 p-5 rounded text-white">
		<h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">
			Whoops, an error occurred while loading the data:
		</h1>
		<p class="font-mono my-4">{error}</p>
		<p>You can try reloading the page.</p>
	</div>
{/await}
