import axios from "axios";

const headers = {
    'Accept': 'application/json'
}

export const $api = axios.create({
    baseURL: 'https://api.chucknorris.io',
    headers
})
