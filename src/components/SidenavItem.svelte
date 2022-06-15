<script>
    import {page} from '$app/stores';
    import {buildPageUrl} from "$lib/buildPageUrl";

    export let data;
    export let indent = 0;

    // We need to make this reactive so the variable updates when pages switch :)
    $: isActive = (data.id === $page.params.id);
    // REALLY janky way to check if any of the children are active (and the item will be open if it is)
    $: isChildrenActive = (JSON.stringify(data.children.page.results).includes($page.params.id));

    let open = false;

    function toggle() {
        open = !open;
    }
</script>

<div class="py-1 hover:bg-gray-300 dark:hover:bg-slate-700" style="padding-left: {4 + indent}px;"
     class:bg-gray-300={isActive} class:dark:bg-slate-700={isActive}>
    <span on:click={toggle}>
        <!--    Show a different icon if there's children-->
        {#if data.children.page.results.length > 0}
        {#if (open || isChildrenActive)}
            <i class="fas fa-chevron-down"></i>
        {:else}
            <i class="fas fa-chevron-right"></i>
        {/if}
    {:else}
        <i class="far fa-file"></i>
    {/if}
    </span>

    <a href="{buildPageUrl(data.title, data.id)}">
        <span>
            {data.title}
        </span>
    </a>
</div>

{#if open || isChildrenActive}
    {#each data.children.page.results as child}
        <svelte:self data={child} indent={indent + 8} />
    {/each}
{/if}
