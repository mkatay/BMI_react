import React from 'react'

export const BmiResult = ({resultCateg}) => {
  return (
     <div className="rounded-xl bg-emerald-50 p-4 text-emerald-950">
      <p className="text-lg font-extrabold">A BMI-értéked: {resultCateg.bmi}</p>
      <p className="mt-1 font-semibold">{resultCateg.category}</p>
      <p className="mt-1 text-sm">{resultCateg.message}</p>
    </div>     
  )
}

