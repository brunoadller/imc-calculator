import { Levels } from '@/types/Levels'
import React from 'react'
import upImage from '@/assets/up.png'
import downImage from '@/assets/down.png'
import Image from 'next/image'

type Props = {
    item: Levels
}
const GridItem = ({item}: Props) => {
  return (
    <div className ={`flex items-center justify-center flex-col p-5 rounded-[10px] flex-1`} style={{backgroundColor: item.color}}>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50%] bg-[rgba(0,0,0,.1)]'>
            {
            <Image src={item.icon === 'up' ? upImage : downImage} alt='up' width={30}/>
            }  
        </div>
        <div className="text-xl font-bold text-white mt-1 ">{item.title}</div>

        {item.yourImc && 
        <div className='text-[17px] mt-[10px] mx-0 mb-[50px] text-white'>
            Seu IMC é de {item.yourImc} Kg/m²
        </div>
        
        }    

        <div className="text-[12px] mt-3 text-white ">
            <>
               IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong> 
            </>
        </div>
    </div>
  )
}

export default GridItem