import './styles/homefooter.css'
import daygo from '../assets/DayGo.png';
const HomeFooter = () => {


  const pngImage: string = daygo;  


  return (
        <div className='container'>
          <div id='container__div'>
            <footer id='footer'> 
          <nav id='container__nav'>
        <ul>
            <li><h4>Compañía</h4></li>
            <li>Acerca de Nosotros</li>
            <li>Testimonios</li>
        </ul>
        <ul>
            <li><h4>Recursos</h4></li>
            <li>Política de Privacidad</li>
            <li>Términos y Condiciones</li>
            <li>Contáctanos</li>
        </ul>
        
        <section>
            <img  id='logo__dg'   src={pngImage} alt=" png Image" />
            <form id='form'>
                <input  id='form__input'   placeholder='Ingresa tu correo electrónico'></input>
                <button id='form__btn'   >Suscribirse</button>
            </form>
        </section>
    </nav> 
</footer>

          </div>  
        </div>
      );
    }
    


export default HomeFooter