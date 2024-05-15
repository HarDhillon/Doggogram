const ITEMS_PER_PAGE = 6;
export async function fetchPostPages() {
    // Ideally this could just be a quick SELECT COUNT in the backend
    const response = await fetch("http://localhost:4321/api/posts", { cache: 'no-store' })
    const data = await response.json()
    const totalPages = Math.ceil(data.total / ITEMS_PER_PAGE)

    return totalPages
}

export async function fetchPosts(currentPage) {


    const offset = (currentPage * ITEMS_PER_PAGE) - ITEMS_PER_PAGE
    const response = await fetch(`http://localhost:4321/api/posts/?limit=${ITEMS_PER_PAGE}&offset=${offset}`, { cache: 'no-store' })
    const posts = await response.json()

    return posts
}
