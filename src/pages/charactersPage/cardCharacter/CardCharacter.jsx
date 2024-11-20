import React from "react"
import styles from "./cardCharacter.module.css"

import { Loader } from "../../../common/loader/Loader"
import { img_sizes } from "../../../common/constants"
import { ComicsPage } from "./comics/ComicsPage"

export const CardCharacter = ({ name, comics, id, openComics, thumbnail, comicsRequest }) => {

    const imageUrl = `${thumbnail.path}/${img_sizes.portrait_medium}.${thumbnail.extension}`
    const idCard = id
    const loader = idCard === comicsRequest.idRec && Object.keys(comicsRequest.comics).length === 0
    const isComic = idCard !== comicsRequest.idRec

    return <div
        className={styles.card}    >
        {isComic && <img className={styles.img} src={imageUrl} alt="img" />}
        <h3 className={styles.name}>{name}</h3>
        {loader ?
            <Loader /> :
            isComic ?
                <>
                    <ul className={styles.cover}>{comics.map((el, id) => {
                        return (
                            <li
                                key={id}
                                className={styles.title}
                                onClick={() => openComics(el.resourceURI, idCard)}>
                                Comics:
                                <span title={el.name} className={styles.comicsName}>{el.name}</span>
                            </li>)
                    })}</ul>

                </> :
                <>
                    <ComicsPage
                        comicsRequest={comicsRequest}
                        openComics={openComics}
                    />
                </>}
    </div>
}