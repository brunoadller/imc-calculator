import { ReactNode, createContext, useContext, useState } from "react";

type HeightFieldContextType = {
    heightField: number | string
    setHeightField: (n: number | string) => void
}

export const HeightFieldContext = createContext<HeightFieldContextType | null>(null)


type Props = {children: ReactNode}

export const HeightFieldContextProvider = ({children}: Props) =>{
    const [heightField, setHeightField] = useState<number | string>('')
    return (
        <HeightFieldContext.Provider value={{heightField, setHeightField}}>
            {children}
        </HeightFieldContext.Provider>
    )
} 
export const  useHeightField = () => useContext(HeightFieldContext) 