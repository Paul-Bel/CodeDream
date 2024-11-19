import React from "react";
import styles from "./charactersPage.module.css"

import { CardCharacter } from "./cardCharacter/CardCharacter.jsx"

export const CharactersPage = ({arrData}) => {

    return (
        <div className={styles.wrap}>
            <header>
                <h1>Marvel</h1>
                <div className={styles.cardContainer}>
                {arrData.map((el, i) => {
                    return <CardCharacter
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        comics={el.comics.items} />
                })}
                </div>
            </header>
        </div>
    )



}