import React, { useEffect, useState } from "react";
import { CharactersPage } from "./charactersPage/CharactersPage.jsx"

import { getData } from "../api/api.js"

export const PageHOC = () => {

    const [arrData, setArrData] = useState([])

    async function initialData() {
        try {
            const result = await getData.getCharacters()

            console.log('result', result,)

            setArrData(result)

        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => {
        initialData()
    }
        , [])

    return (
        Array.isArray(arrData) ?
            <CharactersPage arrData={arrData} /> :
            "Server is not available, try again later"

    )



}