import styles from "./MainComicsPage.module.css"

import { img_sizes } from "../../../common/constants"

const img = img_sizes.portrait_small

export const MainComicsPage = ({ comicsArr }) => {

    return (
        <div>
            {comicsArr.map((el, id) => {
                const imageUrl = `${el.thumbnail.path}/${img}.${el.thumbnail.extension}`
                return (
                    <div
                        key={el.id}
                        className={styles.comicsCard}>
                        <img src={imageUrl} alt="img" />
                        <p className={styles.title}>{el.title}</p>
                    </div>

                )
            })}
        </div>
    )
}