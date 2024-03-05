'use client'
import Header from "@/components/Header"
import LeftSide from "@/components/LeftSide"
import RightSide from "@/components/RightSIde"
import { HeightFieldContextProvider} from "@/contexts/HeightField"
import { WeightFieldContextProvider} from "@/contexts/WeightField"
import { Levels } from "@/types/Levels"
import { useState } from "react"


const Home = () => {
  const [toShow, setToShow] = useState<Levels | null>(null)
  const [disabledButton, setDisabledButton] = useState(false)
  
  return (
   <main className="">
    <HeightFieldContextProvider>
      <WeightFieldContextProvider>
        <Header />
        <div className="flex-col gap-y-20 max-w-[768px] m-auto py-0 px-5 md:max-w-[900px] md:flex md:flex-row md:gap-x-20">
          <LeftSide toShow = {toShow} setToShow = {setToShow} disabledButton = {disabledButton} setDisabledButton={setDisabledButton}/>
          <RightSide toShow = {toShow} setToShow = {setToShow}  setDisabledButton={setDisabledButton}/>
        </div>
        </WeightFieldContextProvider>
      </HeightFieldContextProvider>
   </main>
  )
}

export default Home