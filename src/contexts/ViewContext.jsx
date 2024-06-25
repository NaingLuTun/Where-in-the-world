import {createContext, useState } from "react"
import { Cards } from "../components/Cards"
import { ViewCountry } from "../components/ViewCountry"


const ViewerContext = createContext()

const ViewContext = () => {
    const [viewIndividual, setViewIndividual] = useState(false) 

    return (
        <ViewerContext.Provider value={{viewIndividual, setViewIndividual}}>
            {viewIndividual? <ViewCountry/> : <Cards/>}
        </ViewerContext.Provider>
    )
}

export {ViewContext, ViewerContext}