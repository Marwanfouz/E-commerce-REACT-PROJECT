import { configureStore } from '@reduxjs/toolkit'
import { getAllProductsReducer } from '../slices/GetAllProducts'

export const store = configureStore({
  reducer: {
    products: getAllProductsReducer,
  },
})
