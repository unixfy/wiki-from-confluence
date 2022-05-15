export async function getConfluenceSpaceData() {
    const response = await fetch(
        'https://corsproxy.unixfy.net/?https://unixfy.atlassian.net/wiki/rest/api/content/4096009/child/page?expand=body.atlas_doc_format'
    );
    return await response.json();
}