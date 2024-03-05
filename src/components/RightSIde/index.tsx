import React, { Dispatch, SetStateAction } from 'react'
import { levels,  } from '@/helpers/imc'
import GridItem from '../GridItem'
import { Levels } from '@/types/Levels'
import LeftArrowImage from '@/assets/leftarrow.png'
import Image from 'next/image'
import { useHeightField } from '@/contexts/HeightField'
import { useWeightField } from '@/contexts/WeightField'

type Props = {
  toShow: Levels | null,
  setToShow: Dispatch<SetStateAction<Levels | null>>

  setDisabledButton: Dispatch<SetStateAction<boolean>>
}
const RightSide = ({toShow, setToShow, setDisabledButton}: Props) => {
  const heightCtx = useHeightField()
  const weightCtx = useWeightField()

  const handleBackButton = () => {
    setToShow(null)
    heightCtx?.setHeightField('')
    weightCtx?.setWeightField('')
    setDisabledButton(false)
  }
  return (
    <div className='flex flex-1 ml-0 my-[50px] md:my-0' >
      {!toShow && (
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {levels.map((item, key) => {
          return(
            <GridItem key={key} item ={item}/>
          )
        })}
      </div>
      )}
      {
        toShow && 
          <div className='flex flex-1'>
            <div 
            onClick={handleBackButton}
            className='absolute bg-[#227c9d] w-[70px] h-[70px] rounded-[10px] md:rounded-[50%] flex justify-center 
            items-center cursor-pointer 
            hover:opacity-80
            transition-all ease-linear
              md:-ml-[35px] md:mt-[145px] sm
            '>
              <Image src={LeftArrowImage} alt='leftarrow' width={25} />
            </div>
            <GridItem item={toShow}/>
          </div>
      }
    </div>
  )
}

export default RightSide