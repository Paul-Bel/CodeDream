import React from "react"
import styles from "./charactersPage.module.css"


export const CharactersPage = ({ name, comics, id }) => {

    const openComics = (title) => {
        alert(title)
    }

    return <div className={styles.card}>
        <h3>{name}</h3>

        <ul>{comics.map((el, id) => {
            // console.log(el.resourceURI)
            return (
                <li
                    key={id}
                    className={styles.title}
                    onClick={() => openComics(el.resourceURI)}>
                    Comics:
                    <span className={styles.comicsName}>{el.name}</span>
                </li>
            )
        })}</ul>
    </div>
}