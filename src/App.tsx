
import './App.css';


import Home from './pages/Home/page';



function App() {
  return (
    <div className='body'>
      <Home/>
    </div>
  );
}

export default App;







// // src/App.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchExchangeRates,
//   selectCurrency,
//   setBaseCurrency,
//   setTargetCurrency,
//   setAmount,
// } from './features/currencySlice';

// function App() {
//   const dispatch = useDispatch();
//   const { rates, baseCurrency, targetCurrency, amount, loading, error } =
//     useSelector(selectCurrency);

//   // useEffect(() => {
//   //   dispatch(fetchExchangeRates(baseCurrency));
//   // }, [dispatch, baseCurrency]);

//   useEffect(() => {
//     dispatch(fetchExchangeRates(baseCurrency) as any); // Explicitly type dispatch as any
//   }, [dispatch, baseCurrency]);
  

//   const handleBaseCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch(setBaseCurrency(event.target.value));
//   };

//   const handleTargetCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch(setTargetCurrency(event.target.value));
//   };

//   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setAmount(Number(event.target.value)));
//   };

//   return (
  
     
//       <div>
//         {loading === 'pending' && <p>Loading...</p>}
//         {loading === 'succeeded' && (
//           <ul>
//             {Object.entries(rates).map(([currency, rate]) => (
//               <li key={currency}>
//                 {currency}: {amount * rate}
//               </li>
//             ))}
//           </ul>
//         )}
//         {loading === 'failed' && <p>Error: {error}</p>}
//       </div>
  
//   );
// }

// export default App;

