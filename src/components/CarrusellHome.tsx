import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./styles/carouselHome.css"

const CarrusellHome = () => {
  return (
  <>
  <OwlCarousel
  items="3"
  loop
  autoplay
  autoplayTimeout:string="2500"


  >
    <section className="cards">
<article className="card card--1">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>

      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
       <span className="card__time">15 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Grill</span>
    <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Cristian Perez</a></span>
  </div>
</article>

<article className="card card--2">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>

      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
      <span className="card__time">15 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Grill</span>
    <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Cristian Perez</a></span>
  </div>
</article>

<article className="card card--3">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>

      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
      <span className="card__time">15 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Grill</span>
    <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Cristian Perez</a></span>
  </div>
</article>

<article className="card card--4">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>

      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
      <span className="card__time">15 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Grill</span>
    <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Cristian Perez</a></span>
  </div>
</article>

     </section>     
    

  </OwlCarousel>

  <OwlCarousel
  items="1"
  loop
  autoplay
  autoplayTimeout="2500"
 
  >
     <section className="cards"> 
    <article className="card card--5">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>
      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
        <span className="card__time">35 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Delux</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Jamar Masias</a></span>
  </div>
</article>  

<article className="card card--6">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>
      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
        <span className="card__time">35 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Delux</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Jamar Masias</a></span>
  </div>
</article>  

<article className="card card--7">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>
      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
        <span className="card__time">35 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Delux</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Jamar Masias</a></span>
  </div>
</article>  

<article className="card card--8">
  <div className="card__info-hover">
    <i className='bx bx-bookmark-heart  card__like'></i>
      <div className="card__clock-info">
        <i className='bx bx-timer card__clock'></i> 
        <span className="card__time">35 min</span>
      </div>
    
  </div>
  <div className="card__img"></div>
  <a href="#" className="card_link">
     <div className="card__img--hover"></div>
   </a>
  <div className="card__info">
    <span className="card__category"> Delux</span>
    <h3 className="card__title">Discover the sea</h3>
    <span className="card__by">by <a href="#" className="card__author" title="author">Jamar Masias</a></span>
  </div>
</article>  
</section>
  </OwlCarousel>
 
  </>
  )
}

export default CarrusellHome