<script context="module">
    //  Fetch our data from Confluence api
    import {get} from "svelte/store";
    import {atlassianTenantName} from "../../../stores.js";

    export async function load({params, fetch}) {
        const response = await fetch(
            `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/${params.id}?expand=body.export_view.webresource.tags.all,body.export_view.webresource.superbatch.tags.all`
        );

        let response_status = response.status;

        // TODO: Also return 404 in case the page slug doesn't quite match what we can compute

        return {
            status: response_status,
            props: {
                page: response.ok && (await response.json())
            }
        }
    }
</script>

<script>
    import RenderWikiContent from "../../../components/RenderWikiContent.svelte";

    export let page;
</script>

<!--{#await getConfluencePageData($page.params.id)}-->
<!--    &lt;!&ndash;Fake text-looking loading animation&ndash;&gt;-->
<!--    <div class="w-full h-8 bg-gray-300 mb-6 animate-pulse"></div>-->
<!--    <div class="w-full h-8 bg-gray-300 mb-6 animate-pulse"></div>-->
<!--    <div class="w-2/3 h-8 bg-gray-300 mb-6 animate-pulse"></div>-->
<!--{:then data}-->
    <h1 class="section-heading">{page.title} <span class="text-sm">{page.id}</span></h1>

    <div class="mb-4 md:mb-8 border border-slate-900 dark:border-white"></div>

    <p>
        <RenderWikiContent data="{page}"/>
    </p>
<!--{:catch error}-->
<!--    <div class="my-4 bg-red-500 p-5 rounded text-white">-->
<!--        <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">-->
<!--            Whoops, an error occurred while loading the data:-->
<!--        </h1>-->
<!--        <p class="font-mono my-4">{error}</p>-->
<!--        <p>You can try reloading the page.</p>-->
<!--    </div>-->
<!--{/await}-->
