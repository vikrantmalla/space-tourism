import React from 'react'
import { PageData } from '@/types/data'

const HomePage = ({homes}: PageData.IndexPageData) => {
  return (
    <div><h1 className='text-white'>{homes.map((about) => about.heading)}</h1></div>
  )
}

export default HomePage