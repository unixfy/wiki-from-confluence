export async function getConfluencePageHierarchy() {
    // Note that this is limited to 5 levels of hierarchy (increase levels by adding more children.page expands)
    const response = await fetch(
        `https://corsproxy.unixfy.net/?https://unixfy.atlassian.net/wiki/rest/api/content/4096009/child/page?expand=children.page.children.page.children.page.children.page`
    );
    return await response.json();
}