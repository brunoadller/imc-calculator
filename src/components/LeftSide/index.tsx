import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useHeightField } from '@/contexts/HeightField'
import { useWeightField } from '@/contexts/WeightField'
import { calculateIMC } from '@/helpers/imc'
import { Levels } from '@/types/Levels'

type Props = {
  toShow: Levels | null
  setToShow: Dispatch<SetStateAction<Levels |null>>,
  disabledButton: boolean
  setDisabledButton: Dispatch<SetStateAction<boolean>>
}
const LeftSide = ({toShow, setToShow,disabledButton, setDisabledButton}: Props) => {
    const heightCtx = useHeightField()
    const weightCtx = useWeightField()
    

    const handleCalculateButton = () => {
     if((heightCtx?.heightField && weightCtx?.weightField ) 

     ){
      let imc = calculateIMC(+heightCtx?.heightField, +weightCtx?.weightField)
      setToShow(imc)
      setDisabledButton(true)
     }else {
      alert("Campos não estão preenchidos.")
     }
    }
  return (
    <div className='flex-1 mr-0 '>
       <h1 className='m-0 text-[40px] text-[#3a4b5c]'>Calcule o seu IMC.</h1>
        <p className='text-base mb-10 text-[#6a7d8b]'>IMC é a sigla para Índice de Massa Corpórea.
        Parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pesoa
        </p>

        <input 
        className={`
        
        w-full border-b border-gray-400 py-[10px] px-[2px] mb-5 text-sm outline-none ${disabledButton ? 'cursor-not-allowed opacity-50': ''}`}
        type="number"
        placeholder='Digite a sua altura. Ex 1.5 (em metros)'
        value={heightCtx?.heightField }
        onChange={(e) => heightCtx?.setHeightField(parseFloat(e.target.value))} 
        disabled = {disabledButton}
        />
        <input
        className={`w-full border-b
         border-gray-400 py-[10px] px-[2px] mb-5 text-sm outline-none ${disabledButton ? 'cursor-not-allowed opacity-50': ''}`}
        type="number"
        placeholder='Digite seu peso. Ex 80.6 (em Kg)'
        value={weightCtx?.weightField}
        onChange={(e) => weightCtx?.setWeightField(parseFloat(e.target.value))} 
        disabled = {disabledButton}
        />
        <button
        className={`w-full bg-[#227c90] text-white text-[15px] border-none py-[15px] rounded-md mt-10 hover:opacity-80
        transition-all ease-linear ${disabledButton ? 'cursor-not-allowed opacity-50': ''}`}
        onClick={handleCalculateButton}
        disabled={disabledButton}
        >
            Calcular
        </button>
    </div>
  )
}

export default LeftSide