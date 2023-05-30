import CarrusellHome from "../components/CarrusellHome";
import Register from "../components/Register";
import { useState } from "react";
import "./styles/home.css";
import Login from "../components/Login";

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

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
      </div>
    </>
  );
};

export default Home;
