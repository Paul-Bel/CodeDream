import React from "react";
import styles from "./charactersPage.module.css"

import { CardCharacter } from "./cardCharacter/CardCharacter.jsx"

export const CharactersPage = ({characters, openComics}) => {
console.log('characters',characters)
    return (
        <div className={styles.wrap}>
            <header>
                <h1>Marvel</h1>
                <div className={styles.cardContainer}>
                {characters.map((el, i) => {
                    return <CardCharacter
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        comics={el.comics.items}
                        openComics={openComics}
                        thumbnail={el.thumbnail}
 />
                })}
                </div>
            </header>
        </div>
    )



}