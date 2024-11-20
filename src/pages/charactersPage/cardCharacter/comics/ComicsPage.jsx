import React from "react"
import styles from "./comicsPage.module.css"

import { img_sizes } from "../../../../common/constants"

export const ComicsPage = ({ comicsRequest, openComics }) => {

    const { title, images, prices } = comicsRequest.comics

    return <div
        className={styles.card} >
        <h5 className={styles.name}>{title}</h5>
        <div>
            {prices.map((el, id) => {
                return <span key={id}>
                    <b className={styles.price}>
                        {el.type === "printPrice" ?
                            'Print Price' :
                            "Digital Purchase Price"}</b>:
                    <span>${el.price}</span>
                </span>
            })}
        </div>
        <div className={styles.imgContainer}>
            {images.map((el, id) => {
                return <img
                    key={id}
                    className={styles.img}
                    src={`${el.path}/${img_sizes.portrait_medium}.${el.extension}`}
                    alt="img">
                </img>
            })}

        </div>
        <button onClick={() => openComics(0, 0)}>Go back</button>
    </div>
}