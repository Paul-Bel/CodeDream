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
                return response.data
            })
            .catch(response => console.log('catch response', response))
    }
}