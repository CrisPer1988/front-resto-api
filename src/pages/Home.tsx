import CarrusellHome from "../components/CarrusellHome";
import Register from "../components/Register";
import {  useState } from "react";
import "./styles/home.css";
import Login from "../components/Login";

//import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // const {restaurants} = useSelector<any>(state => state)

  // console.log(restaurants);
  
  

  const handleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleClick = () =>{
    localStorage.clear()
    
   }

  return (
    <>
      <div className="content__home">
        <header className="header__home">
         
          <span onClick={handleRegister}>Registrarse</span>
          <span onClick={handleLogin}>Login</span>
        </header>
        <CarrusellHome />
        {showRegister ? <div className="content__form-home"><h2 className="x__close" onClick={handleRegister}>X</h2><Register /> </div>: ""}

       {showLogin ? <div className="content__form-home"><h2 className="x__close" onClick={handleLogin}>X</h2><Login /> </div>: ""} 
       {/* <button onClick={() => dispatch(AllRestaurantsThunk())}>ver restaurantes</button> */}
      {/* {
        restaurants.map(resto => (
          <div key={resto.id}>
            <h2>{resto.name}</h2>
          </div>
        ))
      } */}
      </div>
    </>
  );
};

export default Home;
