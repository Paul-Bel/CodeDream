import axios from "axios"
import md5 from 'md5';

const apikey = process.env.REACT_APP_APIKEY
const prkey = process.env.REACT_APP_PRKEY

const time = new Date().getTime()
const hash = md5(time+prkey+apikey)

const instance = axios.create({
    baseURL: 'http://gateway.marvel.com/',
    params: {
        "ts": time,
        'apikey': apikey,
        'hash': hash,
    },
});


export const getData = {
    getCharacters() {
        return instance.get(`/v1/public/characters`)
            .then(response => {
                return response.data.data.results
            })
            .catch(rej => console.log('catch response', rej))
    },

    getCharacter(id) {
        return instance.get(`/v1/public/characters/${id}`)
        .then(response => {
            return response.data.data.results[0]
        })
        .catch(rej => console.log('catch response', rej))
    },

    getComicsCharacter(id) {
        return instance.get(`/v1/public/characters/${id}/comics`)
        .then(response => {
            return response.data.data.results[0]
        })
        .catch(rej => console.log('catch response', rej))
    },
    getPandomComics(url) {
        return instance.get(url)
        .then(response => {
            console.log('getPandomComics(url)',response.data.data.results[0])
        })
        .catch(rej => console.log('catch response', rej))
    },
}