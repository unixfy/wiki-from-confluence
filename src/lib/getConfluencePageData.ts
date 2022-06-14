import { atlassianTenantName } from "../stores";
import {get} from "svelte/store";

export async function getConfluencePageData(id: number) {
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/${id}?expand=body.export_view.webresource.tags.all,body.export_view.webresource.superbatch.tags.all`
    );
    return await response.json();
}