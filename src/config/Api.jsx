import axios from 'axios'

const Api = axios.create({
    baseURL : 'http://localhost:8000/',
    headers:{
        "Authorization" : localStorage.getItem("sisdoe@token")
    }
})

export default Api