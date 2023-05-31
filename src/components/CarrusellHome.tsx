import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./styles/carouselHome.css"

const CarrusellHome = () => {
  return (
  <>
  <OwlCarousel
  items:string="3"
  loop
  autoplay
  autoplayTimeout:string="2500"


  >
    <div className="item content__img-carousel">

        <img className="img__carousel" src="/images/carousel/piza5.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/piza5.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/piza5.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/piza5.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/piza5.jpg" alt="" /> 
    </div>

  </OwlCarousel>

  <OwlCarousel
  items="3"
  loop
  autoplay
  autoplayTimeout="2500"
 
  >
    <div className="item content__img-carousel">

        <img className="img__carousel" src="/images/carousel/poll1.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/poll1.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/poll1.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/poll1.jpg" alt="" /> 
    </div>
    <div className="item">

        <img className="img__carousel" src="/images/carousel/poll1.jpg" alt="" /> 
    </div>

  </OwlCarousel>
  </>
  )
}

export default CarrusellHome