import React, { useEffect, useState } from "react";
import { getData } from "../../api/api.js"
import { CharactersPage } from "../Characters/CharactersPage.jsx"

// const Char = React.memo(CharactersPage)

export const MainPage = () => {

    const [arrData, setArrData] = useState([])
    async function initialData() {
        try {
            const result = await getData.getCharacters()
            setArrData(result)
            console.log('arrayData', result)
        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => {
        initialData()
    }
        , [])


    // console.log('arrayData', arrData)

    // return <Char arrData={arrData} />
    return  <CharactersPage data={arrData} />



}