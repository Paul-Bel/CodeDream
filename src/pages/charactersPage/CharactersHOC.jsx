import React, { useEffect, useState } from "react";

import { CharactersPage } from "./CharactersPage.jsx"
import { Loader } from "../../common/loader/Loader.jsx"
import { getData } from "../../api/api.js"

export const CharactersHOC = () => {

    const [loader, setLoader] = useState(true)
    const [charactersArr, setcharactersArr] = useState('')
    const [comicsRequest, setComicsRequest] = useState({ idRec: 0, comics: {} })

    async function initialData() {
        try {
            const characters = await getData.getCharacters()
            setcharactersArr(characters)
            setLoader(false)
        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    async function openComics(title, id) {
        let chech = title !== 0
        chech ?
            setComicsRequest({ idRec: id, comics: {} }) :
            setComicsRequest({ idRec: id, comics: { ...comicsRequest.comics } })
        try {
            if (!chech) return
            const result = await getData.getRandomComics(title)
            setComicsRequest({ idRec: id, comics: { ...result } })
        }
        catch (err) { console.log("Loading failed: ", err) }

    }

    useEffect(() => { initialData() }, [])

    return (
        Array.isArray(charactersArr) && !loader ?
            <CharactersPage
                characters={charactersArr}
                openComics={openComics}
                comicsRequest={comicsRequest} /> :
            loader ?
                <Loader /> :
                "Server is not available, try again later"
    )
}