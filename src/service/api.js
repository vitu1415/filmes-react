import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=da32d0a31ffc1c1d1f235d4baa116f22

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;