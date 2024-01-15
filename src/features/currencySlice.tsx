// src/features/currencySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CurrencyState {
  rates: Record<string, number>;
  baseCurrency: string;
  targetCurrency: string;
  amount: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}



const initialState: CurrencyState = {
  rates: {},
  baseCurrency: 'USD',
  targetCurrency: 'PKR',
  amount: 0,
  loading: 'idle',
  error: null,
};

export const fetchExchangeRates = createAsyncThunk(
  'currency/fetchExchangeRates',
  async (baseCurrency: string) => {
    const response = await axios.get(
      `https://open.er-api.com/v6/latest/${baseCurrency}`
    );
    return response.data;
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action) => {
      state.targetCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.rates = action.payload.rates;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export const { setBaseCurrency, setTargetCurrency, setAmount } =
  currencySlice.actions;

export const selectCurrency = (state: { currency: CurrencyState }) =>
  state.currency;

export default currencySlice.reducer;
