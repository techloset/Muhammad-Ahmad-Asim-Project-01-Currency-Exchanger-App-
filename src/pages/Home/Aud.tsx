
import CurrencyCard from '../../components/CurrencyCard'
import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Aud() {
  const location = useLocation();
  console.log('Location:', location);

  const fromCurrency = new URLSearchParams(location.search).get('fromCurrency');
  const toCurrency = new URLSearchParams(location.search).get('toCurrency');

  return (
    <div className="bg-blue-100 h-[470px]">
      <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20">
        Convert {fromCurrency} to {toCurrency}
      </h1>
      <div className="relative mt-[20px]">
        <CurrencyCard/>
      </div>
    </div>
  );
}
