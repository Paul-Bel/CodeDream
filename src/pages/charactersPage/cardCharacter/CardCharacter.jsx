import React from "react"
import styles from "./cardCharacter.module.css"
import {getData} from "../../../api/api"


export const CardCharacter = ({ name, comics, id }) => {

    const openComics = (title) => {
        alert(title)
        getData.getPandomComics(title)
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