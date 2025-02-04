import React from "react"
import Card from "./card"
import Pagination from "./pagination"
import { fetchPostPages, fetchPosts } from "../lib/actions"

export default async function CardWrapper({ currentPage }) {

    const totalPages = await fetchPostPages()
    const posts = await fetchPosts(currentPage)

    // Cards built depend on items per page, variable set in fetchPosts
    const renderedCards = posts.posts.map((post) => {
        return <Card key={post.id} postData={post}></Card>
    })

    return (
        <>
            <div className='flex flex-wrap justify-between'>
                {renderedCards}
            </div>
            <div>
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}