import React from 'react'

export const BmiCard = ({id,image,min,max,category,message}) => {
  return (
   
      <div className='bg-white shadow-md shadow-slate-200'>
        <img src={image} alt={category} />
        <div>{category}</div>
        <div>BMI: {min}-{max}</div>
        <div>{message}</div>
      </div>

  )
}
