import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import axios from 'axios'
import Home from './pages/Home';

function App() {
  const [allRestaurants, setAllRestaurants] = useState<any>()

  useEffect(() => {
    const url = "http://localhost:3400/api/v1/restaurants"

    axios.get(url)
      .then(res => setAllRestaurants(res.data.restaurants))
      .catch(err => console.log(err))
  }, [])

  console.log(allRestaurants);
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App