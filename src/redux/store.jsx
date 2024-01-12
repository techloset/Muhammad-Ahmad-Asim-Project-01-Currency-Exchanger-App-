// import {configureStore} from '@reduxjs/toolkit'
// import todoReducer from './todoSlicer'
// export const store = configureStore ({
//    reducer:{
//     todo: todoReducer
//    }
    
// })



import { configureStore } from '@reduxjs/toolkit';

import exchangeRatesReducer from './exchangeRatesSlice'; // Import the new reducer

export const store = configureStore({
  reducer: {
    exchangeRates: exchangeRatesReducer, // Add the new reducer to the store
  },
});
