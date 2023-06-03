
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomeFooter from "../src/components/HomeFooter";
import Home from './pages/Home';
import ProtectRoutes from './pages/ProtectRoutes';
import Restaurants from './pages/Restaurants';
import Navegacion from './components/Navegacion';
import RestaurantById from './pages/RestaurantById';
import Orders from './pages/Orders';

function App() {

  return (
    <>
     <Navegacion/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/restaurants' element={<Restaurants />}/>
        <Route path='/restaurants/:id' element={<RestaurantById />}/>
        <Route path='/restaurants/:id' element={<RestaurantById />}/>
      
      <Route element={<ProtectRoutes />}>
       
        <Route path='/orders' element={<Orders />}/>
      </Route>
      </Routes>
      <HomeFooter/>
    </>
  )
}

export default App