import React, { useEffect, useState } from "react";
// import styles from "./mainPage.module.css"
import { getData } from "../../api/api.js"
// import {CharactersPage} from "../characters/CharactersPage"


export const MainPage = () => {

    const [arrData, setArrData] = useState([])
    console.log('arrayData', arrData)
    useEffect(() => {

        getData.getCharacters()
            .then(res => {
                console.log('res', res);
                setArrData(res)

            })
            .catch(err => console.log('err', err))
    }

        , [])

    return <div>fffffffffffffff</div>
    // return  <CharactersPage data={'arrayData'} />



}