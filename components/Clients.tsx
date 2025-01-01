import React from 'react'
import { InfiniteMovingCards } from './ui/InfinieMovingCards'
import {testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        King words from {' '}
        <span className='text-purple'>satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards 
          items={testimonials}  
          direction='left'
          speed='slow'
        />
       </div>
    </div>
  )
}

export default Clients