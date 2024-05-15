import React, { Suspense } from 'react'
import CardWrapper from './components/card-wrapper'
import { CardsSkeleton } from './components/skeletons/card-skeleton'

export default async function Page({ searchParams }) {

  const currentPage = Number(searchParams?.page) || 1

  return (
    <>
      <div>
        NavBar
      </div>

      <div>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper currentPage={currentPage} />
        </Suspense>
      </div>
    </>
  )
}
