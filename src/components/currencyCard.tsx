
// import React from 'react';
// import Select from 'react-select';
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

// export default function CurrencyCard() {
//   return (
//     <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
//       <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
//         Make fast and affordable <br /> international business payments
//       </h1>
//       <p className="text-gray-800 font-roboto text-base text-center  leading-6">
//         Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
//       </p>

//       <div className="flex flex-col sm:flex-row mt-14">
//         <div className="rounded-md border  w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
//           <p>Amount</p>
//           <div className='flex'>
//             <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
//             <Select

//               id="currency"
//               name="currency"
//               options={loading === 'pending' && <p>Loading...</p>}
//               {loading === 'succeeded' && (
//                 <ul>
//                   {Object.entries(rates).map(([currency, rate]) => (
//                     <li key={currency}>
//                       {currency}: {amount * rate}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               {loading === 'failed' && <p>Error: {error}</p>}
             
             
//               className="currency-select h-17  w-24"
//               menuPosition="fixed" // Set menu position to fixed
//             />
//           </div>
//         </div>
//         <button className='ml-4 mr-4 mb-4 w-6'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="" /></button>
//         <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
//           <p>Converted to</p>
//           <div className='flex'>
//             <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
//             <Select
//               id="currency"
//               name="currency"
//               options={[
//                 { value: 'USD', label: 'USD' },
//                 { value: 'CAD', label: 'CAD' },
//                 { value: 'AUD', label: 'AUD' },
//                 { value: 'EUR', label: 'EUR' },
//                 { value: 'GBP', label: 'GBP' },
//                 { value: 'CNH', label: 'CNH' },
//                 { value: 'JPY', label: 'JPY' },
//                 { value: 'HKD', label: 'HKD' },
//                 { value: 'SGD', label: 'SGD' },
//                 { value: 'NZD', label: 'NZD' },
//               ]}
//               className="currency-select h-17 w-24"
//               menuPosition="fixed" // Set menu position to fixed
//             />
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col sm:flex-row mt-14'>
//         <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>1.00 USD = 0.8875 GBP</p>
//         <button className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
//           Get started</button>
//       </div>
//     </div>
//   );
// }










// import React, { useEffect } from 'react';
// import Select from 'react-select';
// import { useDispatch, useSelector } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import {
//   fetchExchangeRates,
//   selectCurrency,
//   setBaseCurrency,
//   setTargetCurrency,
//   setAmount,
// } from './features/currencySlice';

// function App() {
//   const dispatch: ThunkDispatch<any, any, any> = useDispatch();
//   const { rates, baseCurrency, targetCurrency, amount, loading, error } =
//     useSelector(selectCurrency);

//   useEffect(() => {
//     dispatch(fetchExchangeRates(baseCurrency));
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
//     <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
//       <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
//         Make fast and affordable <br /> international business payments
//       </h1>
//       <p className="text-gray-800 font-roboto text-base text-center leading-6">
//         Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
//       </p>

//       <div className="flex flex-col sm:flex-row mt-14">
//         <div className="rounded-md border  w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
//           <p>Amount</p>
//           <div className='flex'>
//             <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
//             {loading === 'succeeded' && (
//               <Select
//                 id="currency"
//                 name="currency"
//                 options={Object.entries(rates).map(([currency, rate]) => (
//                   { value: currency, label: `${currency}` }
//                 ))}
//                 className="currency-select h-17  w-24"
//                 menuPosition="fixed"
//               />
//             )}
//             {loading === 'pending' && <p>Loading...</p>}
//             {loading === 'failed' && <p>Error: {error}</p>}
//           </div>
//         </div>
//         <button className='ml-4 mr-4 mb-4 w-6'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="" /></button>
//         <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
//           <p>Converted to</p>
//           <div className='flex'>
//             <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
//             <Select
//               id="currency"
//               name="currency"
//               options={[
//                 { value: 'USD', label: 'USD' },
//                 { value: 'CAD', label: 'CAD' },
//                 { value: 'AUD', label: 'AUD' },
//                 { value: 'EUR', label: 'EUR' },
//                 { value: 'GBP', label: 'GBP' },
//                 { value: 'CNH', label: 'CNH' },
//                 { value: 'JPY', label: 'JPY' },
//                 { value: 'HKD', label: 'HKD' },
//                 { value: 'SGD', label: 'SGD' },
//                 { value: 'NZD', label: 'NZD' },
//               ]}
//               className="currency-select h-17 w-24"
//               menuPosition="fixed"
//             />
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col sm:flex-row mt-14'>
//         <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>1.00 USD = 0.8875 GBP</p>
//         <button className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
//           Get started</button>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  fetchExchangeRates,
  selectCurrency,
  setBaseCurrency,
  setTargetCurrency,
  setAmount,
} from '../features/currencySlice'; // Adjust the path based on your project structure

function App() {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const {
    rates,
    baseCurrency,
    targetCurrency,
    amount,
    loading,
    error,
  } = useSelector(selectCurrency);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  const handleBaseCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setBaseCurrency(event.target.value));
  };

  const handleTargetCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setTargetCurrency(event.target.value));
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(Number(event.target.value)));
  };

  return (
    <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
      <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
        Make fast and affordable <br /> international business payments
      </h1>
      <p className="text-gray-800 font-roboto text-base text-center leading-6">
        Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
      </p>

      <div className="flex flex-col sm:flex-row mt-14">
        <div className="rounded-md border  w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
          <p>Amount</p>
          <div className='flex'>
            <input type="number" placeholder="0.00" className="border-none w-3/4 h-17 focus:outline-none" />
            {loading === 'succeeded' && (
              <Select
                id="currency"
                name="currency"
                options={Object.entries(rates).map(([currency, rate]) => (
                  { value: currency, label: `${currency}` }
                ))}
                className="currency-select h-17  w-24"
                menuPosition="fixed"
              />
            )}
            {loading === 'pending' && <p>Loading...</p>}
            {loading === 'failed' && <p>Error: {error}</p>}
          </div>
        </div>
        <button className='ml-4 mr-4 mb-4 w-6'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="" /></button>
        <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
          <p>Converted to</p>
          <div className='flex'>
            <input type="number" placeholder="0.00" className="border-none w-3/4 h-17 focus:outline-none" />
            {loading === 'succeeded' && (
            <Select
                id="currency"
                name="currency"
                options={Object.entries(rates).map(([currency, rate]) => (
                  { value: currency, label: `${currency}` }
                ))}
                className="currency-select h-17  w-24"
                menuPosition="fixed"
              />
            )}
            {loading === 'pending' && <p>Loading...</p>}
            {loading === 'failed' && <p>Error: {error}</p>}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mt-14'>
        <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>1.00 USD = 0.8875 GBP</p>
        <button className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
          Get started</button>
      </div>
    </div>
  );
}

export default App;

