
import {Routes, Route} from "react-router-dom"
import LandingPage from "../Pages/landingPage/LandingPage.js"
import Auth from "../Pages/auth/Auth.js"
import MovieDetails from "../Pages/movieDetail/MovieDetails.js"
import FilterPage from "../Pages/filterPage/FilterPage.js"

const AppRoutes=()=>{
   
    return (
        <>
        <Routes>

            <Route path="/" element={<LandingPage/>}></Route>

            <Route path="/auth" element={<Auth/>} />

            <Route path="/:movieId/:movieName/details" element={<MovieDetails></MovieDetails>}/>

            <Route path="/filter" element={<FilterPage></FilterPage>}/>
           
        </Routes>

        </>
    )
}
export default AppRoutes