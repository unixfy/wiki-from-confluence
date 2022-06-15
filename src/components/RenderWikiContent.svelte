<script>
    // Takes the data retrieved from the Confluence page API (getConfluencePageData.ts)
    export let data;
</script>

<div class="confluencecontent">
    <!--{@html data.body.export_view.webresource.superbatch.tags.all}-->
    <!--{@html data.body.export_view.webresource.tags.all}-->
    {@html data.body.export_view.value}
</div>

<style src="../../confluencecontent.css" lang="postcss">
</style>