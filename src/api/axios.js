import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "37f03269ff65b2c2aa091c966f9c21d3",
        language: "ko-KR"
    }
})

export default instance