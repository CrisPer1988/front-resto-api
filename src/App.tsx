import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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
      {
        allRestaurants && allRestaurants.map((restaurant: any) => (    
          <div>
            <h1 key={restaurant.name}>{restaurant.name}</h1>
            <h3>Rating: {restaurant.rating}</h3>
          </div>   
          
        ))
      }
    </>
  )
}

export default App