import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import './carousal.css';

function Mycarousal() {
  return (
    <Carousel interval={null} indicators={null} >
      <Carousel.Item>
        <img src = {slide1} text="First slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src = {slide2} text="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src = {slide3} text="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousal;