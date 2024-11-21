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
                    <ul className={styles.cover}>{
                        Boolean(comics.length) ?
                            comics.map((el, id) => {
                                let title = el.name.length > 38 ? el.name.slice(0, 38) + '...' : el.name
                                return (
                                    <li
                                        key={id}
                                        className={styles.title}
                                        onClick={() => openComics(el.resourceURI, idCard)}>
                                        Comics:
                                        <span title={title} className={styles.comicsName}>{title}</span>
                                    </li>)
                            }) :
                            <li className={styles.title}>Coming soon...</li>}:
                    </ul> </> :
                <>
                    <ComicsPage
                        comicsRequest={comicsRequest}
                        openComics={openComics}
                    />
                </>}
    </div>
}