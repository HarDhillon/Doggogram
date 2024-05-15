import React from 'react'

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-[calc(33%-2rem)] mb-6 pb-[33%]`}>
        </div >
    )
}

export function CardsSkeleton() {
    return (
        <div className='flex flex-wrap justify-between'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}
