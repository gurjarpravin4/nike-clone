import React from 'react'

const ShoeCard = (props) => {
    const handleClick = () => {
        if (props.bigShoeImage !== props.imgURL.bigShoe) {
            props.changeBigShoeImage(props.imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
        ${props.bigShoeImage === props.imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} 
        cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={props.imgURL.thumbnail} alt="shoe" width={127} height={103} className='object-contain' />
        </div>
    </div>
  )
}

export default ShoeCard
