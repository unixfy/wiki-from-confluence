export async function getConfluencePageData(id: number) {
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://unixfy.atlassian.net/wiki/rest/api/content/${id}?expand=body.export_view.webresource.tags.all`
    );
    return await response.json();
}