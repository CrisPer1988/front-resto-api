import { configureStore } from "@reduxjs/toolkit"
import restaurants from "./slices/restaurants.slice"

export default configureStore({
    reducer: {
        restaurants
    }
})
