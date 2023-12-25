import { useLocation,NavLink} from "react-router-dom"
import NavBar  from "../../components/common/NavBar"
import SubHeader from "../../components/common/SubHeader"

const FilterPage=()=>{

    const {state:filteredSearch}=useLocation()
    console.log(filteredSearch)

    return(
        <>
       <NavBar></NavBar>
       <SubHeader></SubHeader>
       <div>
          
          <h5 className="font-weight-bolder my-3" style={{textAlign:"center"}}>Recommended Movies</h5>
   
          <div className="d-flex justify-content-center flex-wrap " style={{gap:"0.5rem"}}>
           {
               filteredSearch.map((movie)=>{
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
       
          </div> 
        </>
    )
}
export default FilterPage