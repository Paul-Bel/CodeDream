import { useEffect, useState } from "react"
import { Loader } from "../../common/loader/Loader"
import { getData } from "../../api/api"
import { MainComicsPage } from "./MainComicsPage/MainComicsPage"

export const ComicsHOC = () => {

    const [loader, setLoader] = useState(true)
    const [comicsArr, setcomicsArr] = useState('')

    async function initialData() {
        try {
            const rusult = await getData.getComics()
            setLoader(false)
            setcomicsArr(rusult)
        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => { initialData() }, [])

    return (
        Array.isArray(comicsArr) && !loader ?
            <MainComicsPage comicsArr={comicsArr} /> :
            loader ?
                <Loader /> :
                "Server is not available, try again later"

    )
}