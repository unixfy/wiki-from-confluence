<!-- Lists all top-level pages in Confluence -->
<script>
	import { onMount } from 'svelte';

	let getConfluenceData = (async () => {
		const response = await fetch(
			'https://corsproxy.unixfy.net/?https://unixfy.atlassian.net/wiki/rest/api/content/4096009/child/page?expand=body.atlas_doc_format'
		);
		return await response.json();
	})();
</script>

{#await getConfluenceData}
	<div class="grid grid-cols-3 gap-2">
		<div
			class="animate-pulse border rounded border-gray-300 bg-zinc-50 text-black dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-4 h-full hover:bg-zinc-700 hover:text-white hover:border-gray-900 dark:hover:border-gray-300 dark:hover:bg-zinc-50 dark:hover:text-black transition ease-in-out bg-white"
		/>
		<div
			class="border rounded border-gray-300 bg-zinc-50 text-black dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-4 h-full hover:bg-zinc-700 hover:text-white hover:border-gray-900 dark:hover:border-gray-300 dark:hover:bg-zinc-50 dark:hover:text-black transition ease-in-out bg-white"
		/>
		<div
			class="border rounded border-gray-300 bg-zinc-50 text-black dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-4 h-full hover:bg-zinc-700 hover:text-white hover:border-gray-900 dark:hover:border-gray-300 dark:hover:bg-zinc-50 dark:hover:text-black transition ease-in-out bg-white"
		/>
	</div>
{:then data}
	<div class="grid grid-cols-3 gap-4">
		{#each data.results as result}
			<a href="/page/{result.title}/{result.id}">
				<div
					class="drop-shadow-md border border-gray-300 dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-8 h-full hover:bg-zinc-100 dark:hover:bg-zinc-600 hover:border-blue-500 transition ease-in-out bg-white"
				>
					<p class="text-xl sm:text-2xl pb-6 font-medium">
						{result.title} <i class="fas fa-chevron-right" />
					</p>
					<p>
						{JSON.parse(result.body.atlas_doc_format.value).content[0].content[0].content[0].text}
					</p>
				</div>
			</a>
		{/each}
	</div>
{:catch error}
	<div class="my-4 bg-red-500 p-5 rounded text-white">
		<h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">
			Whoops, an error occurred while loading the data:
		</h1>
		<p class="font-mono my-4">{error}</p>
		<p>You can try reloading the page.</p>
	</div>
{/await}
