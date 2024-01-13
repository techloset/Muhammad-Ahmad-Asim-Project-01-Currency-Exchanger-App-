//           spare code use for Later


// // Import statements
// import React, { useEffect, useState } from 'react';
// import Select, { ActionMeta, SingleValue } from 'react-select';
// import { useDispatch, useSelector } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import {
//   fetchExchangeRates,
//   selectCurrency,
//   setBaseCurrency,
//   setTargetCurrency,
//   setAmount,
// } from '../features/currencySlice';

// // Interface for currency options
// interface CurrencyOption {
//   value: string;
//   label: string;
// }

// // React component
// function App() {
//   const dispatch: ThunkDispatch<any, any, any> = useDispatch();
//   const { rates, baseCurrency, targetCurrency, amount, loading, error } = useSelector(selectCurrency);

//   useEffect(() => {
//     dispatch(fetchExchangeRates(baseCurrency));
//   }, [dispatch, baseCurrency]);

//   const handleBaseCurrencyChange = (
//     newValue: SingleValue<CurrencyOption>,
//     actionMeta: ActionMeta<CurrencyOption>
//   ) => {
//     if (newValue) {
//       dispatch(setBaseCurrency(newValue.value));
//     }
//   };

//   const handleTargetCurrencyChange = (
//     newValue: SingleValue<CurrencyOption>,
//     actionMeta: ActionMeta<CurrencyOption>
//   ) => {
//     if (newValue) {
//       dispatch(setTargetCurrency(newValue.value));
//     }
//   };

//   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setAmount(Number(event.target.value)));
//   };

//   const convertCurrency = () => {
//     // Perform the conversion logic here
//     const convertedAmount = amount * rates[targetCurrency];
//     // Set the converted amount to the state
//     setConvertedAmount(convertedAmount);
//   };

//   const mapRatesToOptions = (): CurrencyOption[] => {
//     return Object.entries(rates).map(([currency, rate]) => ({
//       value: currency,
//       label: `${currency}`,
//     }));
//   };

//   const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

//   return (
//     <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
//       <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
//         Make fast and affordable <br /> international business payments
//       </h1>
//       <p className="text-gray-800 font-roboto text-base text-center leading-6">
//         Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
//       </p>

//       <div className="flex flex-col sm:flex-row mt-14">
//         <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
//           <p>Amount</p>
//           <div className='flex'>
//             <input
//               type="number"
//               placeholder="0.00"
//               value={amount || ''}
//               onChange={handleAmountChange}
//               className="border-none w-3/4 h-17 focus:outline-none"
//             />
//             {loading === 'succeeded' && (
//               <Select<CurrencyOption>
//                 id="baseCurrency"
//                 name="baseCurrency"
//                 options={mapRatesToOptions()}
//                 value={mapRatesToOptions().find(option => option.value === baseCurrency)}
//                 className="currency-select h-17 w-24"
//                 menuPosition="fixed"
//                 onChange={handleBaseCurrencyChange}
//               />
//             )}
//             {loading === 'pending' && <p>Loading...</p>}
//             {loading === 'failed' && <p>Error: {error}</p>}
//           </div>
//         </div>
//         <button className='ml-4 mr-4 mb-4 w-6'>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="Currency Logo" />
//         </button>
//         <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
//           <p>Converted to</p>
//           <div className='flex'>
//             <input
//               type="number"
//               placeholder="0.00"
//               value={convertedAmount !== null ? convertedAmount.toFixed(2) : ''}
//               readOnly
//               className="border-none w-3/4 h-17 focus:outline-none"
//             />
//             {loading === 'succeeded' && (
//               <Select<CurrencyOption>
//                 id="targetCurrency"
//                 name="targetCurrency"
//                 options={mapRatesToOptions()}
//                 value={mapRatesToOptions().find(option => option.value === targetCurrency)}
//                 className="currency-select h-17 w-24"
//                 menuPosition="fixed"
//                 onChange={handleTargetCurrencyChange}
//               />
//             )}
//             {loading === 'pending' && <p>Loading...</p>}
//             {loading === 'failed' && <p>Error: {error}</p>}
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col sm:flex-row mt-14'>
//         <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>
//           1.00 USD = {rates['GBP']}
//         </p>
//         <button onClick={convertCurrency} className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
//         Get started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;








// Import statements
import React, { useEffect, useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  fetchExchangeRates,
  selectCurrency,
  setBaseCurrency,
  setTargetCurrency,
  setAmount,
} from '../features/currencySlice';

// Interface for currency options
interface CurrencyOption {
  value: string;
  label: string;
}

// React component
function App() {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const { rates, baseCurrency, targetCurrency, amount, loading, error } = useSelector(selectCurrency);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  const handleBaseCurrencyChange = (
    newValue: SingleValue<CurrencyOption>,
    actionMeta: ActionMeta<CurrencyOption>
  ) => {
    if (newValue) {
      dispatch(setBaseCurrency(newValue.value));
    }
  };

  const handleTargetCurrencyChange = (
    newValue: SingleValue<CurrencyOption>,
    actionMeta: ActionMeta<CurrencyOption>
  ) => {
    if (newValue) {
      dispatch(setTargetCurrency(newValue.value));
    }
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(Number(event.target.value)));
  };

  const convertCurrency = () => {
    // Perform the conversion logic here
    const convertedAmount = amount * rates[targetCurrency];
    // Set the converted amount to the state
    setConvertedAmount(convertedAmount);
  };

  const swapCurrencies = () => {
    // Swap baseCurrency and targetCurrency
    dispatch(setBaseCurrency(targetCurrency));
    dispatch(setTargetCurrency(baseCurrency));
  };

  const mapRatesToOptions = (): CurrencyOption[] => {
    return Object.entries(rates).map(([currency, rate]) => ({
      value: currency,
      label: `${currency}`,
    }));
  };

  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  return (
    <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
      <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
        Make fast and affordable <br /> international business payments
      </h1>
      <p className="text-gray-800 font-roboto text-base text-center leading-6">
        Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
      </p>

      <div className="flex flex-col sm:flex-row mt-14">
        <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
          <p>Amount</p>
          <div className='flex'>
            <input
              type="number"
              placeholder="0.00"
              value={amount || ''}
              onChange={handleAmountChange}
              className="border-none w-3/4 h-17 focus:outline-none"
            />
            {loading === 'succeeded' && (
              <Select<CurrencyOption>
                id="baseCurrency"
                name="baseCurrency"
                options={mapRatesToOptions()}
                value={mapRatesToOptions().find(option => option.value === baseCurrency)}
                className="currency-select h-17 w-24"
                menuPosition="fixed"
                onChange={handleBaseCurrencyChange}
              />
            )}
            {loading === 'pending' && <p>Loading...</p>}
            {loading === 'failed' && <p>Error: {error}</p>}
          </div>
        </div>
        <button className='ml-4 mr-4 mb-4 w-6' onClick={swapCurrencies}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="Currency Logo" />
        </button>
        <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
          <p>Converted to</p>
          <div className='flex'>
            <input
              type="number"
              placeholder="0.00"
              value={convertedAmount !== null ? convertedAmount.toFixed(2) : ''}
              readOnly
              className="border-none w-3/4 h-17 focus:outline-none"
            />
            {loading === 'succeeded' && (
              <Select<CurrencyOption>
                id="targetCurrency"
                name="targetCurrency"
                options={mapRatesToOptions()}
                value={mapRatesToOptions().find(option => option.value === targetCurrency)}
                className="currency-select h-17 w-24"
                menuPosition="fixed"
                onChange={handleTargetCurrencyChange}
              />
            )}
            {loading === 'pending' && <p>Loading...</p>}
            {loading === 'failed' && <p>Error: {error}</p>}
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mt-14'>
        <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>
         {amount}    {baseCurrency} = {convertedAmount}    {targetCurrency}
        </p>
        <button onClick={convertCurrency} className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
