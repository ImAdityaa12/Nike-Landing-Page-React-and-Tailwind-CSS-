import React from 'react'
import { reviews } from "../constants/index"
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='info-text text-center m-auto mt-4 max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((r)=>(
          <ReviewCard key={r.customerName} 
            imgUrl ={r.imgURL}
            customerName = {r.customerName}
            rating = {r.rating}
            feedback={r.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews