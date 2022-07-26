import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,name,image,description,price, owner}) => {

  return (
    <div className='w-300 h-400 flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-500'>
        <div className='w-full h-2/3 rounded-t-lg'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-t-lg' />
        </div>
        <div className='w-full h-1/3 flex flex-col bg-white text-slate-900 rounded-b-lg p-2'>
            <div className='flex items-center justify-between'>
                <p className='text-sm'>{name}</p>
                <p className='text-sm'>{price}ETH</p>
            </div>
            <div className='mt-1 mb-2'>
                <p className='text-sm'>{description}.</p>
            </div>
            <div className='w-full flex items-center justify-between px-2'>
                <Link to={`/nfts/${id}`} className='bg-slate-900 text-white text-sm p-1 relative before:w-full before:h-full before:border-1 before:border-slate-900 before:absolute before:-top-1 before:-left-1 hover:before:top-0 hover:before:left-0 before:duration-300 before:ease-in-out'>
                    See More
                </Link>
                <p className='text-slate-900'>{owner}</p>
            </div>
        </div>
    </div>
  )
}

export default Card