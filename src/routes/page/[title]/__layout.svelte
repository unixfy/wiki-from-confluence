<script context="module">
    import {get} from "svelte/store";
    import {atlassianTenantName, spaceRootPage} from "../../../stores.js";

    export async function load({fetch}) {
        // Note that this is limited to 5 levels of hierarchy (increase levels by adding more children.page expands)
        const response = await fetch(
            `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/${get(spaceRootPage)}/child/page?expand=children.page.children.page.children.page.children.page`
        );

        return {
            status: response.status,
            props: {
                pagedata: response.ok && (await response.json())
            }
        }
    }
</script>

<script>
	export let pagedata;

	import Sidenav from '$components/Sidenav.svelte';
</script>

<div class="page-wrapper">
	<div class="ct">
		<div class="grid sm:grid-cols-7 gap-8 mt-4">
			<div class="col-span-2">
				<Sidenav data="{pagedata}" />
			</div>
			<div class="col-span-5">
				<slot />
			</div>
		</div>
	</div>
</div>
