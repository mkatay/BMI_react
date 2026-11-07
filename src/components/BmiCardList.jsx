import React from 'react'
import { bmiRules } from '../rules'
import { BmiCard } from './BmiCard'
import { useState } from 'react'

export const BmiCardList = ({resultCateg}) => {
  const [bmiCategories] = useState(bmiRules)
  return (
    <div>
      <h2>BMI kategóriák</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,250px))] gap-4 justify-center'>
        {bmiCategories.map(obj=> 
        <div key={obj.id} className={`${resultCateg &&  resultCateg.id==obj.id ? 'border-4 border-emerald-700' : 'border-none'}`}>
          <BmiCard  {...obj}/> 
        </div>
          )}
      </div>
    </div>
  )
}
