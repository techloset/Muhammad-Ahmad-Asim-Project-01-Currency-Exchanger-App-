

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchExchangeRates = createAsyncThunk(
//   'fetchExchangeRates',
//   async () => {
//     try {
//       const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
//       const data = await response.json();
//       return data.rates; // Assuming the API response has a 'rates' property
//     } catch (error) {
//       throw Error('Failed to fetch exchange rates');
//     }
//   }
// );

// const exchangeRatesSlice = createSlice({
//   name: 'exchangeRates',
//   initialState: {
//     isLoading: false,
//     rates: null,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchExchangeRates.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchExchangeRates.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.rates = action.payload;
//       })
//       .addCase(fetchExchangeRates.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default exchangeRatesSlice.reducer;






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExchangeRates = createAsyncThunk(
  'fetchExchangeRates',
  async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      return response.data.rates; // Assuming the API response has a 'rates' property
    } catch (error) {
      throw Error('Failed to fetch exchange rates');
    }
  }
);

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState: {
    isLoading: false,
    rates: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default exchangeRatesSlice.reducer;
