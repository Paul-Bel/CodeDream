import { useEffect } from "react"


import {getData} from "../../api/api"




export const ComicsPage = () => {

    async function initialData() {
        try {
            const comics = await getData.getComics()
            console.log('comics',comics)

        }
        catch (err) { console.log("Loading failed: ", err) }
    }

    useEffect(() => { initialData() }, [])
    
    return (
        <div>test
           
        </div>
    )
}