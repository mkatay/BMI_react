import React from 'react'
import { useState } from 'react'
import {BmiResult} from './BmiResult'
import { getCateg } from '../utils'

export const BmiForm = ({resultCateg,setResultCateg}) => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    //ellenőrzés
    const categ=getCateg(height,weight)
    //ha null üzenet(state: msg)
    setResultCateg(categ)
  }
  return (
    <div>
      <h2>Számítsd ki a BMI-értékedet</h2>
      <form onSubmit={handleSubmit}>
        <label>Testsúly(kg):
          <input className='rounded-lg border border-slate-300 p-4' type="number" value={weight} 
            onChange={(e)=>setWeight(e.target.value)}/>
        </label>
        <label>Magasság(cm):
          <input  className='rounded-lg border border-slate-300 p-4' type="number" value={height} 
            onChange={(e)=>setHeight(e.target.value)}/>
        </label>
        <button className='bg-emerald-700 text-emerald-50 rounded-lg p-4'>Számítás</button>
      </form>
      {resultCateg && <BmiResult resultCateg={resultCateg}/>}
    </div>
  )
}

