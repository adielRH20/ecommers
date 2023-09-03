import { createSlice } from '@reduxjs/toolkit'
import { setIsLoading } from './isLoading.slice'
import axios from 'axios'

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const Products = action.payload
      return Products
    }

  }
})

export const { setProducts } = ProductSlice.actions

export const getProductsThunk = () => dispatch => {
  dispatch(setIsLoading(true))
  axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}

export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true))
  return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`) // este endpoint no es dejame ver si hay
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}

export const filterPruductsInputThunk = (productsSearch) => (dispatch) => {
  dispatch(setIsLoading(true))
  return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products?title=' + productsSearch)
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
}
export default ProductSlice.reducer
