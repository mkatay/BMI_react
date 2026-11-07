
import { useState } from 'react'
import './App.css'
import { BmiCardList } from './components/BmiCardList'
import { BmiForm } from './components/BmiForm'

function App() {
  const [resultCateg, setResultCateg] = useState(null)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800"> 
      <h1 className='text-center font-bold text-2xl p-4'>BMI-kalkulátor</h1>
      <h3 className='text-center font-extrabold text-4xl p-4'>Te hová tartozol?</h3>
      <BmiForm resultCateg={resultCateg} setResultCateg={setResultCateg}/>
      <BmiCardList resultCateg={resultCateg}/>

    </div>
  )
}

export default App
