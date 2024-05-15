import React from "react"
import Card from "./card"

export default async function CardWrapper() {

    // Do not cache the fetch request so that new posts are always fetched on reload
    const response = await fetch("http://localhost:4321/api/posts", { cache: 'no-store' })
    const posts = await response.json()

    const renderedCards = posts.posts.map((post) => {
        return <Card key={post.id} postData={post}></Card>
    })

    return (
        <div className='flex flex-wrap justify-between'>
            {renderedCards}
        </div>
    )
}