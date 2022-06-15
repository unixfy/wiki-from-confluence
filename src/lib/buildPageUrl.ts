export function buildPageUrl(title: string, id: number) {
//    Generates a page URL on our site from a page title and a page ID

//    Handle the title (slugify it)
    let slugified_title = title.toString()
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')

//    put together the url
    return `/page/${slugified_title}/${id}`
}