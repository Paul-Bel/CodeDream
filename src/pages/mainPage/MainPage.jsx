import React, { useEffect, useState } from "react";
import { getData } from "../../api/api.js"
import { CharactersPage } from "../characters/CharactersPage"
import styles from "./mainPage.module.css"

export const MainPage = () => {

    const [arrData, setArrData] = useState([])

    async function initialData() {
        try {
            const result = await getData.getCharacters()

            console.log('arrayData', result)

            setArrData(result)

        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => {
        initialData()
    }
        , [])

    return (
        arrData ?
        <div className={styles.wrap}>
            <header>
                <h1>Marvel</h1>
                <div className={styles.cardContainer}>
                {arrData.map((el, i) => {
                    return <CharactersPage
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        comics={el.comics.items} />
                })}
                </div>
            </header>
        </div>
        : "Server is not available, try again later"
    )



}