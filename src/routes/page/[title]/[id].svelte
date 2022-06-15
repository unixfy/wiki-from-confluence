<script>
    import {page} from '$app/stores';
    import {getConfluencePageData} from '$lib/getConfluencePageData';
    import RenderWikiContent from "../../../components/RenderWikiContent.svelte";
</script>

{#await getConfluencePageData($page.params.id)}
    <!--Fake text-looking loading animation-->
    <div class="w-full h-8 bg-gray-300 mb-6 animate-pulse"></div>
    <div class="w-full h-8 bg-gray-300 mb-6 animate-pulse"></div>
    <div class="w-2/3 h-8 bg-gray-300 mb-6 animate-pulse"></div>
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
