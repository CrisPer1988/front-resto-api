// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const restaurantsSlices = createSlice({
    name: "restaurants",
    initialState: null,
    reducers: {
        setRestaurants: (state:any, action:any) => action.payload
    }

})


export const {setRestaurants} = restaurantsSlices.actions

export default restaurantsSlices.reducer

export const AllRestaurantsThunk = () => (dispatch:any) => {
    const url = "http://localhost:3400/api/v1/restaurants"

    axios.get(url)
    .then(res => {
        dispatch(setRestaurants(res.data.restaurants))
       
        
    })
    .catch(err => console.log(err))
}