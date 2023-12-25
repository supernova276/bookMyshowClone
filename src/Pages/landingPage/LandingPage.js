
import NavBar  from "../../components/common/NavBar"
import SubHeader from "../../components/common/SubHeader"
import CarouselComp from "../../components/carousel/Carousel"
import Loader from "../../components/common/Loader"
import { useEffect, useState } from "react"
import { getAllMovies } from "../../api/movies"
import { NavLink, Navigate, useLocation, useParams } from "react-router-dom"
const LandingPage=()=>{

    const[isLoading, setLoading]=useState(true)
    const[data,setData]=useState([])

    const Params=useParams()
    const search =useLocation()
    console.log(search)

    const init=async()=>{
     const {data}= await getAllMovies();
     setData(data)
     setLoading(false)
    }

    useEffect(()=>{

        init();
    
    },[])

    return (
        <>
       <NavBar movieData={data}></NavBar>
       <SubHeader></SubHeader>
       <CarouselComp></CarouselComp>

       { isLoading ? <Loader></Loader>:<div>
          
       <h5 className="font-weight-bolder my-3" style={{textAlign:"center"}}>Recommended Movies</h5>

       <div className="d-flex justify-content-center flex-wrap " style={{gap:"0.5rem"}}>
        {
            data.map((movie)=>{
                return(
                <NavLink to={`/${movie._id}/${movie.name}/details`} style={{textDecoration:"none"}}>
                <div className="d-flex align-items-center flex-column" style={{width:"15rem"}}>
                
                <div className="d-flex w-75 flex-column align-items-center" style={{ height:"20rem"}}>

                <img  className="w-100 m-l-3 h-100 " src={movie.posterUrl}></img>

                <div className="d-flex justify-content-center fw-bolder w-100 bg-dark my-0">
                <span className="bg-light">50k</span>
                <span className="bg-light"><i className="bi bi-star-fill"></i></span>
                </div>
                </div>
                {/* <div className="d-flex justify-content-center fw-bolder w-75 bg-dark">
                <span className="bg-light">50k</span>
                <span className="bg-light"><i class="bi bi-star-fill"></i></span>
                </div> */}
               
                <p className="d-flex align-items-center fw-bolder">{movie.name}</p>
                </div>
                </NavLink>
               
                )
            })
        }
       </div>
    
       </div> }

        </>
    )
}
export default LandingPage