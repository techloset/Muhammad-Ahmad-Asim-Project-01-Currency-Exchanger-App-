
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../features/CurrencySlice';

const Store = configureStore({
  reducer: {
    currency: currencyReducer,
    
  },
  
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
