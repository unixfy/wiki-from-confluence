<!-- Lists all top-level pages in Confluence -->
<script>
    export let data;

    import {buildPageUrl} from "$lib/buildPageUrl";
</script>

<!--{#await getConfluenceSpaceData()}-->
<!--    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 animate-pulse">-->
<!--        &lt;!&ndash; 3 skeleton loader cards &ndash;&gt;-->
<!--        {#each [1, 2, 3] as item}-->
<!--            <div-->
<!--                    class="drop-shadow-md border border-gray-300 dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-8 h-full transition ease-in-out bg-white"-->
<!--            >-->
<!--                <div class="w-36 h-8 bg-gray-300 mb-6"/>-->
<!--                <div class="w-full h-12 bg-gray-300"/>-->
<!--            </div>-->
<!--        {/each}-->
<!--    </div>-->
<!--{:then data}-->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {#each data.results as result}
            <a href="{buildPageUrl(result.title, result.id)}">
                <div
                        class="drop-shadow-md border border-gray-300 dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-8 h-full hover:bg-zinc-100 dark:hover:bg-zinc-600 hover:border-blue-500 transition ease-in-out bg-white"
                >
                    <p class="text-xl sm:text-2xl pb-6 font-medium">
                        {result.title} <i class="fas fa-chevron-right"/>
                    </p>
                    <p>
                        <!--						Basically grabs the text from the first excerpt macro in the JSON -->
                        <!--						Yeah it's super hacky -->
                        <!--						Text MUST be the first element in the excerpt macro to avoid breakage -->
                        {JSON.parse(result.body.atlas_doc_format.value).content.filter(item => !!item.attrs && item.attrs.extensionKey == "excerpt")[0].content[0].content[0].text}
                    </p>
                </div>
            </a>
        {/each}
    </div>
<!--{:catch error}-->
<!--    <div class="my-4 bg-red-500 p-5 rounded text-white">-->
<!--        <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">-->
<!--            Whoops, an error occurred while loading the data:-->
<!--        </h1>-->
<!--        <p class="font-mono my-4">{error}</p>-->
<!--        <p>You can try reloading the page.</p>-->
<!--    </div>-->
<!--{/await}-->
