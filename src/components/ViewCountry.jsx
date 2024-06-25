import { useEffect, useState } from "react"
import { useContext } from "react"
import { ViewerContext } from "../contexts/ViewContext"
const ViewCountry = () => {
    const [viewing, setViewing] = useState([])

    const {viewIndividual, setViewIndividual} = useContext(ViewerContext)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/name/myanmar")
        .then(response => response.json())
        .then(data => {
            setViewing(data)
        })
    }, [])

    const handleBackButton = () => {
        setViewIndividual(false)
    }
    
    return (
        <div>
            {viewing.length > 0 ? (viewing.map(country => (
                <div>{country.name.common}</div>
            ))) : (<p>Loading...</p>)}

            <button onClick={handleBackButton}>back</button>
        </div>
    )
}

export {ViewCountry}