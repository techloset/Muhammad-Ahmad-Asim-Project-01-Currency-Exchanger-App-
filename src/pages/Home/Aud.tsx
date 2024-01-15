
import React from 'react';
import Select from 'react-select';
import CurrencyCard from '../../components/currencyCard';
import { useLocation } from 'react-router-dom';


export default function Aud() {
  const location = useLocation();
  const currency = new URLSearchParams(location.search).get('currency');
  return (
    <div>
      <div className="bg-blue-100 h-[300px]">
        <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20 ">Convert {currency} to any Currency</h1>
        <div className="relative mt-[120px]">
          <CurrencyCard />
        </div>
      </div>
    </div>
  )
}