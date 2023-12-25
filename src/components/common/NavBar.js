import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useParams,NavLink,Navigate,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';

function NavBar({movieData}) {

  const Params=useParams();
  const navigate=useNavigate()
  const [search,setSearch]=useState(Params.movieName||"")
  const [filteredSearch, setFilteredSearch]=useState([])
  const [dropDown,setDropDown]=useState([])
  const[toggleDropDown,settoggleDropDown]=useState(true)

  const handleInput=(e)=>{
    if(!(e.target.value)){
      settoggleDropDown(false);
      return;
    }
    settoggleDropDown(true);
    setSearch(e.target.value.toLowerCase())
    // console.log("value of search",search)

    let filteredData=movieData.filter((movie)=>{
      return movie.name.toLowerCase().includes(e.target.value)
     })
    
     let dropDownData=movieData.filter((movie)=>{
      return movie.name.toLowerCase().startsWith(e.target.value)
     })

     setFilteredSearch(filteredData)
     setDropDown(dropDownData)

    //  console.log(dropDownData)
  }

  const debounce=(callback,timer)=>{
    let timerId;
     return function(...args){
      clearTimeout(timerId);

         timerId=setTimeout(() => {

          callback(...args)
             
         }, timer);
     }
 }

 let debouncedFunction=debounce(handleInput,500)
 

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate("/filter",{search:`search?${search}`,state:filteredSearch},)
  }
  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='justify-content-start'>
          <Navbar.Brand href="#home">BookAMovie</Navbar.Brand>
          
          <Nav className="w-75">
          <form className='w-100' onSubmit={handleSearch}>
          <input className="w-75 p-1" placeholder="search the movies of your choice" defaultValue={search}
          onChange={debouncedFunction}></input>
          {(dropDown && toggleDropDown )? <Dropdown dropDownData={dropDown}></Dropdown>:<></>}
          <Button type="submit" variant="light"><i className="bi bi-search"></i></Button>
          </form>
          </Nav>


          <NavDropdown title="delhi-NCR" id="navbarScrollingDropdown" className="mr-xl-5">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          <Button variant="danger" className="btn-sm">signIn</Button>{' '}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;