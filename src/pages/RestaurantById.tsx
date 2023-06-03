import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./styles/restaurantById.css"


const RestaurantById = () => {
   const {id} = useParams()
   const [restaurant, setRestaurant] = useState<any>()
   const navidate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:3400/api/v1/restaurants/${id}`

        axios.get(url)
        .then(res => setRestaurant(res.data.restaurant))
        .catch(err => console.log(err))
    }, [id])

    const handleClick = () => {
        navidate("/orders")
    }

    
console.log(restaurant);


  return (
    <div className="container container__oneRestaurant">
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.address}</h2>
       
        <h4>Menu</h4>
       
        {
            restaurant?.meals.map((meal: any) => (
                <div key={meal.id}>
                    <ul>
                        <li>{meal.name} <span>$ {meal.price}</span></li>
                       
                    </ul>
                </div>
            ))
        }
        {
            restaurant?.meals.length === 0 ? <p>Menu no disponible</p> : ""
        }

<h4>Reseñas</h4>
        {
            restaurant?.reviews.map((review: any) => ( 
              
                <div>    
                <ul>
                    <li>{review.comment}</li>
                </ul>      
                </div>
            ))
        }

        {
            restaurant?.reviews.length === 0 ? <p>No hay reseñas</p> : ""
        }

        <button onClick={handleClick} className="btn btn-primary">Crear pedido</button>
    </div>
  )
}

export default RestaurantById