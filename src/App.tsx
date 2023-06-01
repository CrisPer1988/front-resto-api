import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomeFooter from "../src/components/HomeFooter";


import axios from 'axios'
import Home from './pages/Home';
import ProtectRoutes from './pages/ProtectRoutes';
import Restaurants from './pages/Restaurants';
import Navegacion from './components/Navegacion';

function App() {
  const [allRestaurants, setAllRestaurants] = useState<any>()

  useEffect(() => {
    const url = "http://localhost:3400/api/v1/restaurants"

    axios.get(url)
      .then(res => setAllRestaurants(res.data.restaurants))
      .catch(err => console.log(err))
  }, [])

  //console.log(allRestaurants);
  

  return (
    <>
     <Navegacion/>
      <Routes>
        <Route path='/' element={<Home />}/>
      
        <Route element={<ProtectRoutes />}>
        <Route path='/restaurants' element={<Restaurants />}/>
      </Route>
      </Routes>
      <HomeFooter/>
    </>
  )
}

export default App