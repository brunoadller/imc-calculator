import { ReactNode, createContext, useContext, useState } from "react"

type WightFieldContextType = {
    weightField: number | string
    setWeightField: (n: number | string) => void
}

export const WeightFieldContext = createContext<WightFieldContextType | null>(null)


type Props = {children: ReactNode}

export const WeightFieldContextProvider = ({children}:Props) => {
    const [weightField, setWeightField] = useState<number | string>('')
    return(
        <WeightFieldContext.Provider value={{weightField, setWeightField}}>
            {children}
        </WeightFieldContext.Provider>
    )
}

export const useWeightField = () => useContext(WeightFieldContext)