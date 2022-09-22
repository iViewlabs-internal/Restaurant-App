// import { createStore} from "redux";
// import rootReducer from "./reducers/index";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { restaurantApi } from './services/restaurants'

const store = configureStore({
    reducer:{
        [restaurantApi.reducerPath] : restaurantApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
})
export default store;
setupListeners(store.dispatch)
