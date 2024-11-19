import React from "react"
import styles from "./cardCharacter.module.css"

// portrait_small	50x75px
// portrait_medium	100x150px
// portrait_xlarge	150x225px
// portrait_fantastic	168x252px
// portrait_uncanny	300x450px
// portrait_incredible	216x324px



export const CardCharacter = ({ name, comics, id, openComics, thumbnail }) => {
'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg'
const size_uncanny = 'portrait_medium'

let imageUrl = `${thumbnail.path}/${size_uncanny}.${thumbnail.extension}`
console.log('imageUrl0', imageUrl);

return <div 
    className={styles.card}
    // style={{ backgroundImage: `url(${imageUrl})` }}
    >
        <img className={styles.img} src={imageUrl} alt="img" />
        <h3>{name}</h3>

        <ul className={styles.cover}>{comics.map((el, id) => {
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