import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return( 
<div className='d-flex justify-content-center'>
 <Spinner animation="border" variant="danger" />
 </div>
 )
}

export default Loader;