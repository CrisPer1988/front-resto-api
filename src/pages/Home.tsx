import CarrusellHome from "../components/CarrusellHome";
import Register from "../components/Register";
import {  useState,useEffect } from "react";
import "./styles/home.css";
import Login from "../components/Login";

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"))

  const handleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleClick = () =>{
    if(localStorage.getItem("token")){
      localStorage.clear()
      setToken(null)
    } 
    // else {
    //   location.reload()
    // } 
   }

   console.log(showLogin);
   

  return (
    <>
      <div className="content__home">
          {
            localStorage.getItem("token") ?
            <header className="header__home">
              <span onClick={handleClick}>Salir</span>
              </header> : <header className="header__home">
              <span onClick={handleRegister}>Registrarse</span>
          <span onClick={handleLogin}>Login</span>
            </header>
            }
        
        <CarrusellHome />
        {showRegister ? <div className="content__form-home"><h4 className="x__close" onClick={handleRegister}>X</h4><Register setShowRegister={setShowRegister}/> </div>: ""}

       {showLogin ? <div className="content__form-home"><h4 className="x__close" onClick={handleLogin}>X</h4><Login setShowLogin={setShowLogin}/> </div>: ""} 
      </div>
    </>
  );
};

export default Home;
