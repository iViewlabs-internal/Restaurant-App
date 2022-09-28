import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootReducer from './reducers'
import { restaurantApi } from './services/restaurants'

const store = configureStore({
    reducer:{
        [restaurantApi.reducerPath] : restaurantApi.reducer,
       rootReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
})
export default store;
setupListeners(store.dispatch)