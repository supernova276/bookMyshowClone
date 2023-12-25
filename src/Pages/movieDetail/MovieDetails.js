import { useLocation,useParams } from "react-router-dom"
import NavBar from "../../components/common/NavBar"
import SubHeader from "../../components/common/SubHeader"
import { useEffect, useState } from "react"
import Loader from "../../components/common/Loader"
import {getMovie } from "../../api/movies/index.js"
import Trailer from "../../components/trailerModal/Trailer.js"

const MovieDetails=()=>{
    const search =useLocation()
    const Params=useParams()

    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    const[PlayBtn,setPlayButton]=useState(false)
    const[modal,setModal]=useState(false)

    const init= async()=>{

        const {data} = await getMovie(Params.movieId);
        setData(data)
        setLoading(false)
    }

    useEffect(()=>{ 
        init()
    })

    const playTrailer=()=>{
        console.log("hello");
        setModal(true)       

    }
    return (
        <>
       <NavBar></NavBar>
       <SubHeader></SubHeader>

       {
         isLoading? <Loader></Loader> : <div>
         <section className="card"  onClick={playTrailer}>
            <img src={data.posterUrl} className="card-img" style={{height:"30rem",objectFit:"cover"}}/>
            <div style={{ backgroundLinearGradient:"(grey, white)"}}>
            <div className="d-flex card-img-overlay" style={{margin:"2rem 2rem"}} >
                 
             { PlayBtn? <div className="card"style={{maxHeight:"22rem", maxWidth:"17rem", borderRadius:"1rem"}} onMouseLeave={() => setPlayButton(false)}>
                <img src={data.posterUrl} style={{maxHeight:"22rem", maxWidth:"17rem", borderRadius:"1rem"}}
                onMouseEnter={()=>{setPlayButton(true)}} onMouseLeave={() => setPlayButton(false)}></img>

                 <div className="card-img-overlay">
                  <div style={{color:"white",fontSize:"3rem",fontWeight:"bolder",marginLeft:"5rem",marginTop:"7rem"}}>
                 <div><i className="bi bi-play-circle"></i></div>
                  </div>
                 </div>
                </div>:
                <>
                <img src={data.posterUrl} style={{maxHeight:"22rem", maxWidth:"17rem", borderRadius:"1rem"}}
                onMouseEnter={()=>{setPlayButton(true)}} onMouseLeave={() => setPlayButton(false)}></img>
                </>

                }
                {modal && <Trailer modalState={modal}></Trailer>}

                <div className="d-flex flex-column align-items:center"style={{maxHeight:"22rem",paddingLeft:"5rem",
            maxWidth:"60rem"}}>
                <div className="d-flex justify-content-between">
                <h1 className="fw-bolder text-white">{data.name}</h1>
                </div>
                <div className="d-flex fw-bolder text-white">
                    <span><i className="bi bi-star-fill"></i></span>
                    <span>8.3/10</span>
                    <span>123.5K votes</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                </div>
                <div className="d-flex justify-content-center bg-secondary">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text-white">add your rating and reviewis</h2>
                    <h4 className="text-white">your ratings matter</h4>
                </div>
                <div className="mr-sm-5">
                <button type="button" className="btn btn-dark" style={{marginLeft:"auto"}}>Rate Now</button> 
                </div>
                </div>

                <div className="d-flex justify-content-center" style={{background:"#94a3b8",marginTop:'1rem'}}><p>2D, IMAX 2D</p></div>
                <div className="d-flex justify-content-center "style={{background:"#94a3b8",marginTop:'0.5rem'}}><p>Hindi, Malyalam, Kannada, Telgu, Tamil</p></div>
                <div className="d-flex justify-content-center "style={{background:"#94a3b8",marginTop:'0.5rem'}}>
                    <p>3h21m</p>
                    <p>Action,Crime,Drama</p>
                    <p>A</p>
                    <p>1,Dec,2023</p>
                </div>
                <button type="button" className="btn btn-dark my-2">Rate Now</button> 
                </div>
                <div style={{marginLeft:"auto"}}>
                <button type="button" className="btn btn-dark ">SHARE</button> 
                </div>
           
            </div>
         </div>
         </section>

         <section style={{margin:"2rem 3rem"}}>
            <div className="d-flex flex-column align-items-center">
            <h3 className="fw-bolder"> About The Movie</h3>
            <p>{data.description}</p>
            </div>

         </section>
         
         </div>
       }
       
        </>
    )
}

export default MovieDetails