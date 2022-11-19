import React from 'react'
import QuoteIcon from '../icons/QuoteIcon'

const StoryCard = ({story, name}) => {
  return (
    <div className='p-8 rounded-[1rem] bg-[#F5F5F5] max-w-[400px] mx-auto'>
        <p className='font-medium'> {story}</p>
        <div className="h-[1px] w-full bg-[#A1A1A1] my-2"></div>
        <div className="flex justify-between items-center mt-2">
            <h3 className="font-bold text-primary">{name}</h3>
            <QuoteIcon size="28"/>
        </div>
    </div>
  )
}

export default StoryCard