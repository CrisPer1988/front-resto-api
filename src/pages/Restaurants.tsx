
import { useDispatch, useSelector } from "react-redux"
import { AllRestaurantsThunk } from "../store/slices/restaurants.slice"
import { useEffect } from "react"
import "./styles/restaurantPages.css"
import { useNavigate } from "react-router-dom"


const Restaurants = () => {
    const { restaurants } = useSelector((state: any) => state as any);
    
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(AllRestaurantsThunk())
    }, [])

    const handleClick = (restaurantId:any) => {
        navigate(`/restaurants/${restaurantId.id}`)
    }

    console.log(restaurants);
 
  return (
    <div className="container restaurants">
        <h1>Restaurantes</h1>
        <div className="container__restaurants">
        {
            restaurants?.map((resto:any) => (
                <article onClick={() => handleClick(resto)} className="content__card-restaurants" key={resto.id} >
                    <h2>{resto.name}</h2>
                  <img className="logo__restaurant" src="/images/logos/logo-restaurant.jpg" alt="" />
                  <div className="description__restaurant">
                    <h5>Direccion: {resto.address}</h5>
                    <h6>Rating: {resto.rating}</h6>
                  </div>                              
              </article>
            ))
        }
        </div>
    </div>
  )
}

export default Restaurants