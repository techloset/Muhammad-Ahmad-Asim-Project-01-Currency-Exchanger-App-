
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrency,
  setBaseCurrency,
  setTargetCurrency,
  setAmount,
  fetchExchangeRates,
} from '../features/CurrencySlice';

const apiUrl = 'https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/symbols?access_key=4c9fea4e264cd6f8266a884feb4b839b';

interface CurrencyOption {
  value: string;
  label: string;
}

function calculateConvertedAmount(amount: number, sourceCurrency: string, targetCurrency: string, exchangeRates: Record<string, number>): number {
  const eurAmount = amount / exchangeRates[sourceCurrency];
  const targetAmount = eurAmount * exchangeRates[targetCurrency];
  return targetAmount;
}

function App() {
  const dispatch = useDispatch();
  const { rates, baseCurrency, targetCurrency, amount, loading, error } = useSelector(selectCurrency);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [countryCurrencies, setCountryCurrencies] = useState<string[]>([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => response.data)
      .then(data => {
        const symbols = data.symbols;
        const names = Object.values(symbols) as string[];
        const currencies = Object.keys(symbols) as string[];

        setCountryNames(names);
        setCountryCurrencies(currencies);
      })
      .catch(error => console.error('Error fetching country names:', error));
  }, []);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurrency) as any);
  }, [dispatch, baseCurrency]);

  const handleBaseCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBaseCurrency(event.target.value));
  };

  const handleTargetCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTargetCurrency(event.target.value));
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(Number(event.target.value)));
  };

  const convertCurrency = () => {
    if (!amount || !rates || !targetCurrency) {
      return;
    }

    const convertedAmount = calculateConvertedAmount(amount, baseCurrency, targetCurrency, rates);

    setConvertedAmount(convertedAmount);

    setPopupVisible(false);
  };

  const swapCurrencies = () => {
    dispatch(setBaseCurrency(targetCurrency));
    dispatch(setTargetCurrency(baseCurrency));
  };

  const mapRatesToOptions = (): CurrencyOption[] => {
    return countryNames.map((countryName, index) => ({
      value: countryCurrencies[index],
      label: `${countryName} - ${countryCurrencies[index]} (${countryName})`,
    }));
  };
  return (
    <div className="rounded-md relative bg-white w-3/4 shadow-2xl p-4  mx-auto">
      <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
        Make fast and affordable <br /> international business payments
      </h1>
      <p className="text-gray-800 font-roboto text-base text-center leading-6">
        Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
      </p>
      <div className="flex flex-col sm:flex-row mt-14">
        <div className="rounded-sm border-2 border-t-[-18px] w-full sm:w-2/3 border-gray-900 h-[80px] bg-white p-4 mb-4 sm:mb-0">
          <div className='flex'>
            <div className="w-3/4 pr-2">
              <p>Amount</p>
              <input
                type="number"
                placeholder="0.00"
                value={amount || ''}
                onChange={handleAmountChange}
                className="border-none w-full h-17 focus:outline-none"
              />
            </div>
            {loading === 'succeeded' && (
              <div className="w-1/4">
                <select
                  id="baseCurrency"
                  name="baseCurrency"
                  value={baseCurrency}
                  className="currency-select border-r-white  border-b-2 mt-[-16px] border-l-2 h-[78px] border-black h-17 w-full"
                  onChange={handleBaseCurrencyChange}
                >
                  {mapRatesToOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {loading === 'pending' && <p>Loading...</p>}
          </div>
          {loading === 'failed' && <p>Error: {error}</p>}
        </div>
        <button className='ml-4 mr-4 mb-4 w-6' onClick={swapCurrencies}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="Currency Logo" />
        </button>
        <div className="rounded-sm border-2 h-[80px] w-full sm:w-2/3 border-gray-700 bg-white p-4">
          <div className='flex'>
            <div className="w-3/4 pr-2">
              <p>Converted to</p>
              <input
                type="number"
                placeholder="0.00"
                value={convertedAmount !== null ? convertedAmount.toFixed(2) : ''}
                readOnly
                className="border-none w-full h-17 focus:outline-none"
              />
            </div>
            {loading === 'succeeded' && (
              <div className="w-1/4">
                <select
                  id="targetCurrency"
                  name="targetCurrency"
                  value={targetCurrency}
                  className="currency-select border-r-white  border-b-2 mt-[-16px] border-l-2 h-[78px] border-black h-17 w-full"
                  onChange={handleTargetCurrencyChange}
                >
                  {mapRatesToOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {loading === 'pending' && <p>Loading...</p>}
          </div>
          {loading === 'failed' && <p>Error: {error}</p>}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mt-14'>
        <p
          className='w-[600px] h-8 mt-2 rounded-full  font-roboto text-base font-bold leading-10 cursor-pointer flex '
        >
          {"1.00"} {baseCurrency} = {convertedAmount?.toFixed(2)} {targetCurrency}
          <div className='bg-blue-500 text-white ml-[15px] mt-[10px] w-[22px] h-[22px] rounded-full flex items-center justify-center'>
            i
          </div>
        </p>
        {popupVisible && (
          <div className="fixed inset-0 bg-blue-500 bg-opacity-75 z-10 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <p className="text-xl font-bold text-gray-800">
                Conversion Successful
              </p>
              <p>
                {amount} {baseCurrency} is converted to {convertedAmount}{' '}
                {targetCurrency}.
              </p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => setPopupVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <button onClick={convertCurrency} className="w-1/2 h-10 mt-3 border-2 border-red-500 hover:bg-white hover:text-red-500 flex-shrink-0 rounded-sm bg-red-500 text-white font-roboto text-base leading-46 cursor-pointer">
          Get started
        </button>
      </div>
    </div>
  );
}

export default App;
