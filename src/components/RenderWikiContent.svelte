<script>
    // Takes the data retrieved from the Confluence page API (getConfluencePageData.ts)
    export let data;
</script>

<div class="confluencecontent">
    <!--{@html data.body.export_view.webresource.superbatch.tags.all}-->
    <!--{@html data.body.export_view.webresource.tags.all}-->
    {@html data.body.export_view.value}
</div>

<!-- MUST apply global here to prevent unused CSS selectors (i.e., css selectors not present outside our @HTML tag) from being auto removed -->
<style global src="../../confluencecontent.css" lang="postcss">
</style>