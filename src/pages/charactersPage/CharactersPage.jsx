import React from "react";
import styles from "./charactersPage.module.css"

import { CardCharacter } from "./cardCharacter/CardCharacter.jsx"

export const CharactersPage = ({ characters, openComics, comicsRequest }) => {
    console.log('characters', characters)
    return (
        <div className={styles.wrap}>
            <div className={styles.cardContainer}>
                {characters.map((el, i) => {
                    return <CardCharacter
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        comics={el.comics.items}
                        openComics={openComics}
                        thumbnail={el.thumbnail}
                        comicsRequest={comicsRequest}
                    />
                })}
            </div>
        </div>
    )



}