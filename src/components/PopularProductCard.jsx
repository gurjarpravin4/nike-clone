import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = (props) => {
  return (
    <div>
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={props.imgURL} alt={props.name} className='w-[280px] h-[280]' />
        <div className="mt-8 flex justify-start">
        <img src={star} alt="Rating" width={24} height={24} />
        <p className='font-montserrat text-left leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{props.name}</h3>
        <p className='mt-2 font-semibold font-mono text-coral-red text-2xl leading-normal'>{props.price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard
