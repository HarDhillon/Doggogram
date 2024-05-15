"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Button from './button';


export default function Card({ postData }) {
    const [post, updatePost] = useState(postData)
    const [liked, setLiked] = useState(false)


    const handleLike = async () => {
        let action = liked ? 'unlike' : 'like'
        const response = await fetch(`http://localhost:4321/api/posts/${post.id}/${action}`, {
            method: "POST"
        })
        const updatedPost = await response.json()
        updatePost(updatedPost.post)
        setLiked(!liked)
    }

    return (
        <div className='card mb-10 shadow-md w-[calc(33%-2rem)]'>
            <Image
                src={post.image}
                alt=''
                width={600}
                height={600}
                style={{ objectFit: "cover", }}
                className='rounded aspect-square w-full'
            />
            <div className='post-info p-5'>
                <Button liked={liked} handleLike={handleLike}></Button>
                <p>{post.likes}</p>
                <p className='font-bold'>{post.username}:</p>
                <p className='ml-2'>{post.caption}</p>
            </div>
        </div>
    )
}

