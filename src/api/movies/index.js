import axios from 'axios'

const BASE_URL=process.env.REACT_APP_BASE_URL;
// https://movie-booking-application.onrender.com/mba/api/v1/movies

console.log(BASE_URL)

export const getAllMovies= async()=>{


    const PATH="/mba/api/v1/movies"

    const URL=BASE_URL+PATH

    return axios.get(URL)

}

export const getMovie=async(movieId)=>{

    const PATH=`/mba/api/v1/movies/${movieId}`

    const URL=BASE_URL+PATH

    return axios.get(URL)
}
