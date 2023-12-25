import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'

function CarouselComp() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item style={{width:"100vw", height:"20rem"}}>
       <img src={img1}alt="image1" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item style={{width:"100vw", height:"20rem"}}>
      <img src={img2} alt="image2" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item style={{width:"100vw", height:"20rem"}}>
      <img src={img3} alt="image3" className='w-100'/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

//   <CCarousel controls>
//   <CCarouselItem style={{width:"100vw", height:"20rem"}}>
//     <CImage className="d-block w-100" src={img1} alt="slide 1" />
//   </CCarouselItem>
//   <CCarouselItem style={{width:"100vw", height:"20rem"}}>
//     <CImage className="d-block w-100" src={img2} alt="slide 2" />
//   </CCarouselItem>
//   <CCarouselItem style={{width:"100vw", height:"20rem"}}>
//     <CImage className="d-block w-100" src={img3} alt="slide 3" />
//   </CCarouselItem>
// </CCarousel>
  );
}

export default CarouselComp;