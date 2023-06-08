import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./styles/restaurantById.css"
import CardPurchases from "../components/CardPurchases"


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

        const price:number = restaurant?.meals.map((meal:any) => {
            return meal.price
        })
   
    


    console.log(price);
    
console.log(restaurant);


  return (
    <div className="container container__oneRestaurant">
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.address}</h2>
       
        <h4>Menu</h4>
       
        {
            restaurant?.meals.map((meal: any) => (
                <div key={meal.id}>
                    {/* <ul>
                        <li>{meal.name} <span>$ {meal.price}</span></li>
                       
                    </ul> */}



<div className="accordion hola" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {meal.name}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        $ {meal.price}
        <button >Añadir al carrito</button>
      </div>
    </div>
  </div>
  </div>

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
    <CardPurchases price={price}/>
        {/* <button onClick={handleClick} className="btn btn-primary">Crear pedido</button> */}
    </div>
  )
}

export default RestaurantById