
import { useDispatch, useSelector } from "react-redux"
import { AllRestaurantsThunk } from "../store/slices/restaurants.slice"
import { useEffect } from "react"



const Restaurants = () => {
    const {restaurants} = useSelector(state => state)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(AllRestaurantsThunk())
    }, [])


    // const restoReviews = restaurants?.map(resto => {
    //     return resto.reviews?.map(rev => {
    //         return rev.comment
    //     })
    // })

    console.log(restaurants);
    //console.log(restoReviews);
    
    
    
  return (
    <div>
        <h2>HOLAA</h2>
        {
            restaurants?.map(resto => (
                <div key={resto.id}>
                    <h2>{resto.name}</h2>
                    <span>{resto.address}</span>                                     
                </div>
            ))
        }
        
    </div>
  )
}

export default Restaurants