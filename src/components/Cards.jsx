import { useContext, useEffect, useState } from "react"
import "./css/Cards.css"
import { ViewerContext } from "../contexts/ViewContext"

const Cards = () => {
    const [data, setData] = useState([])

    const {setViewIndividual} = useContext(ViewerContext)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(datas => {
            console.log(datas)
            setData(datas)
        })
    }, [])

    const viewCountry = () => {
        setViewIndividual(true)
    }

    return (

        <div className="grid-container">
            {data.length > 0 ? (
            data.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country, index) => (
                <div className="card-container" key={index} onClick={viewCountry}>
                    <img className="flags" src={country.flags.png} alt={`${country.name.common}'s flag`} width="250px" height="140px" />
                    <div className="cardInfo-container">

                        <h2>
                            {country.name.common}
                        </h2>

                        <p style={{fontSize: "14px", fontWeight: "600", margin: "none"}}>
                            Population: <span style={{fontWeight: "300"}}>{country.population}</span>
                        </p>

                        <p style={{fontSize: "14px", fontWeight: "600",  margin: "none"}}>
                            Region: <span style={{fontWeight: "300"}}>{country.region}</span>
                        </p>

                        <p style={{fontSize: "14px", fontWeight: "600",  margin: "none"}}>
                            Population: <span style={{fontWeight: "300"}}>{country.capital}</span>
                        </p>

                        
                    </div>
                    
                </div>
            ))) 
            : (<p className="loading">Loading....</p>)}
        </div>
    )
}

export {Cards}