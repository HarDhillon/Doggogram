import React, { Suspense } from 'react'
import CardWrapper from './components/card-wrapper'
import { CardsSkeleton } from './components/skeletons/card-skeleton'

export default async function Page({ searchParams }) {

  const currentPage = Number(searchParams?.page) || 1

  return (
    <>
      <div className='flex justify-center mt-2 mb-6'>
        <h1 className='text-2xl'>Doggogram</h1>
      </div>
      <div className='max-w-screen-xl m-auto mt-2 mb-4'>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper currentPage={currentPage} />
        </Suspense>
      </div>
    </>
  )
}
