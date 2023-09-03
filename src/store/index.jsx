import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import ProductSlice from './slices/products.slice'

export default configureStore({
    reducer: {
    isLoading: isLoadingSlice,
    Products: ProductSlice
    }
})
