export async function getConfluencePageChildren(id: number) {
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://unixfy.atlassian.net/wiki/rest/api/content/${id}/child/page`
    );
    return await response.json();
}