import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./styles/carouselHome.css"
import dataCarousel from '../utils/dataCarousel';

const CarrusellHome = () => {
  return (
  <>
   <OwlCarousel className='owl-theme' 
   loop 
   nav
  items={4}
  autoplay
  autoplayTimeout={2000}
  > 
{ 

dataCarousel.map(data => (

  <article key={data.img} className={`item card ${data.img}`}>
  <div className="card__info-hover">
    <i className={data.icon_like}></i>

      <div className="card__clock-info">
        <i className={data.icon_clock}></i> 
       <span className="card__time">{data.time}</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> {data.card_category}</span>
    <h3 className="card__title">{data.title}</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">{data.author}</a></span>
  </div>
</article>
))
}
  </OwlCarousel> 
  </>
  )
}

export default CarrusellHome