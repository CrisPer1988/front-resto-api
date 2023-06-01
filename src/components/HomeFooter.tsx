import "./styles/homefooter.css";
import daygo from "../assets/DayGo.png";
const HomeFooter = () => {
  const pngImage: string = daygo;

  return (
    // <div className="container">
    //   <div id="container__div">
        <footer className="container__footer">
         
            <ul className="items__footer">
              <li>
                <h4>Compañía</h4>
              </li>
              <li>Acerca de Nosotros</li>
              <li>Testimonios</li>
            </ul>
            <ul className="items__footer">
              <li>
                <h4>Recursos</h4>
              </li>
              <li>Política de Privacidad</li>
              <li>Términos y Condiciones</li>
              <li>Contáctanos</li>
            </ul>


              
              <form className="form__footer">
              <img className="logo__dg" src={pngImage} alt=" png Image" />
                <div className="content__input-footer">
                <input
                  id="form__input"
                  placeholder="Ingresa tu email"
                ></input>
                <button id="form__btn">Suscribirse</button>

                </div>
               
              </form>
            
         
        </footer>
    //   </div>
    // </div>
  );
};

export default HomeFooter;
