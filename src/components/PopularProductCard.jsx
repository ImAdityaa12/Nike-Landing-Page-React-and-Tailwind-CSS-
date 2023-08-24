import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt='name' className='w-[280px] h-[280px]' />
        <div className='flex justify-start items-center'>
            <img src={star} alt="star" width={24} height={24} />
            <p className='font-montserrat '>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-montserrat text-2xl leading-normal font-semibold text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductCard