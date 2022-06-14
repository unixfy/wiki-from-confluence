import { spaceRootPage, atlassianTenantName } from "../stores"
import {get} from "svelte/store";

export async function getConfluenceSpaceData() {
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/${get(spaceRootPage)}/child/page?expand=body.atlas_doc_format`
    );
    return await response.json();
}