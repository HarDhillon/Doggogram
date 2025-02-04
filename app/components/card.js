"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Button from './button';

export default function Card({ postData }) {
    const [post, updatePost] = useState(postData)
    const [liked, setLiked] = useState(false)

    // Check if user has liked that post based on local storage
    useEffect(() => {
        const data = window.localStorage.getItem(postData.id)
        if (data !== null) {
            setLiked(true)
        }
    }, [postData.id])

    // When user changes their like, we either add or remove from local storage
    useEffect(() => {
        if (liked) {
            window.localStorage.setItem(`${postData.id}`, "liked");
        } else {
            window.localStorage.removeItem(`${postData.id}`);
        }
    }, [liked, postData.id]);

    // Post to our api when user likes
    const handleLike = async () => {
        let action = liked ? 'unlike' : 'like';
        const response = await fetch(`http://localhost:4321/api/posts/${post.id}/${action}`, {
            method: "POST"
        });
        setLiked(!liked);
        const updatedPost = await response.json();
        updatePost(updatedPost.post);
    };

    return (
        <div className='card rounded mb-10 shadow-md lg:w-[calc(33%-2rem)] sm:w-[calc(50%-2rem)]'>
            <Image
                src={post.image}
                alt=''
                width={600}
                height={600}
                style={{ objectFit: "cover", }}
                className='rounded-t aspect-square w-full'
            />
            <div className='post-info p-5'>
                <div className='flex mb-3'>
                    <Button liked={liked} handleLike={handleLike}></Button>
                    <p className='ml-1'>{post.likes}</p>
                </div>
                <p className='font-bold'>{post.username}:</p>
                <p className='ml-0 text-sm'>{post.caption}</p>
            </div>
        </div>
    )
}

