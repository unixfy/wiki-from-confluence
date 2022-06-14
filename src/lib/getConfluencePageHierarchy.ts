import { atlassianTenantName } from "../stores";
import {get} from "svelte/store";

export async function getConfluencePageHierarchy() {
    // Note that this is limited to 5 levels of hierarchy (increase levels by adding more children.page expands)
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/4096009/child/page?expand=children.page.children.page.children.page.children.page`
    );
    return await response.json();
}