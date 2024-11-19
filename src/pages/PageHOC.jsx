import React, { useEffect, useState } from "react";
import { CharactersPage } from "./charactersPage/CharactersPage.jsx"

import { getData } from "../api/api.js"

export const PageHOC = () => {

    const [charactersArr, setcharactersArr] = useState('')

    async function initialData() {
        try {
            const characters = await getData.getCharacters()
            setcharactersArr(characters)
        
        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => {initialData()}, [])

    const openComics = (title) => {
        console.log('comics', title)
        getData.getPandomComics(title)
    }
    

    return (
        Array.isArray(charactersArr) ?
            <CharactersPage 
            characters={charactersArr} 
            openComics={openComics} /> :
            "Server is not available, try again later"

    )



}