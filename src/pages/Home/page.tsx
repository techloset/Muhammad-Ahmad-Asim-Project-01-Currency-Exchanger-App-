

// import Select from 'react-select';
// import CurrencyCard from '../../components/currencyCard'
// import { Navigate } from 'react-router-dom';

// const handleDropdown = () =>{
//   if (!selectedCurrency) {
//     alert('Please select a currency')
//   }
//   else {
//     Navigate(`/list?currency=${selectedCurrency`)
//   }
// }

// export default function Home() {
  
//   return (
//     <div><div>
//       <div className="bg-blue-100 h-[470px]">

//         <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20 ">Currency Converter</h1>
//         <p className="text-center mt-5 font-roboto text-base font-normal leading-7 text-gray-700">
//           Need to make an international business payment? Take a look at our live foreign exchange rates.
//         </p>
//         <div className="relative mt-[20px]">
//         <CurrencyCard/>
//         </div>
//       </div>
//     </div>
//       <div className="my-48 text-center justify-center mt-[600px] ">
//         <h1 className="text-gray-900 font-roboto text-4xl font-bold leading-10">Let’s save you some time</h1>
//         <p className="mt-6">If you’ve got a target exchange rate in mind but haven’t got time to keep tabs <br /> on market movement, then a firm order could be perfect for you. When your <br /> chosen rate is reached, we’ll act immediately, leaving you free to concentrate <br /> on your business.</p>
//          <button className="rounded-sm mt-4 bg-red-500 h-10 text-white p-4" >Find out more</button>
//       </div>
//       <div className="bg-blue-100 h-48 ">

//         <h1 className="text-center text-gray-900 font-roboto  text-4xl font-bold leading-10">Popular currencies</h1>
//         <div className='flex justify-center items-center mb-12 mt-16'>

//           <Select
//             id="currency"
//             placeholder="Select a currency"
//             name="currency"
//             options={[
//              { value: 'USD', label: 'USD' },
//               { value: 'CAD', label: 'CAD' },
//               { value: 'EUR', label: 'EUR' },
//               { value: 'CNH', label: 'CNH' },
//               { value: 'JPY', label: 'JPY' },
//               { value: 'NZD', label: 'NZD' },
//             ]}
//             className="currency-select h-2 mb-10 w-1/2"
//             menuPosition="fixed" // Set menu position to fixed
//           />
//           <a href="/IndividualCurrency"> <button className="w-48 mb-4 h-8 mt-3 flex-shrink-0 rounded-sm bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
//             GO
//           </button></a>
//         </div>
//       </div>
//      </div>
//    )
//  }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencyCard from '../../components/currencyCard';

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const navigate = useNavigate();

  const handleDropDown = () => {
    if (!selectedCurrency) {
      alert('Please select a currency');
    } else {
      navigate(`/IndividualCurrency?currency=${selectedCurrency}`);
    }
  };

  return (
    <div>
      <div className="bg-blue-100 h-[470px]">
        <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20">Currency Converter</h1>
        <p className="text-center mt-5 font-roboto text-base font-normal leading-7 text-gray-700">
          Need to make an international business payment? Take a look at our live foreign exchange rates.
        </p>
        <div className="relative mt-[20px]">
          <CurrencyCard />
        </div>
      </div>

      <div className="my-48 text-center justify-center mt-[600px] ">
        <h1 className="text-gray-900 font-roboto text-4xl font-bold leading-10">Let’s save you some time</h1>
        <p className="mt-6">
          If you’ve got a target exchange rate in mind but haven’t got time to keep tabs <br /> on market movement, then a
          firm order could be perfect for you. When your <br /> chosen rate is reached, we’ll act immediately, leaving
          you free to concentrate <br /> on your business.
        </p>
        <button className="rounded-sm mt-4 bg-red-500 h-10 text-white p-4">Find out more</button>
      </div>

      <div className="bg-blue-100 h-48 ">
        <h1 className="text-center text-gray-900 font-roboto text-4xl font-bold leading-10">Popular currencies</h1>
        <div className="flex justify-center items-center mb-12 mt-16">
          <select
            className='w-10/12 sm:w-4/12 h-10 rounded-lg mt-3 p-1 border-2 text-gray-400 focus:outline-none'
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value=""> Select Currency </option>
            <option value="USD"> USD    ( United States Dollar )</option>
            <option value="EUR"> EUR    ( Euro )</option>
            <option value="JPY"> JPY    ( Japanese Yen )</option>
            <option value="NZD"> NZD    ( New Zealand Dollar )</option>
            <option value="PKR"> PKR    ( Pakistan Rupees )</option>
            <option value="CAD"> CAD    ( Canadian Dollar )</option>
          </select>
          <button
            onClick={handleDropDown}
            className='border-2 mt-3 w-4/12 sm:w-2/12 rounded-md border-red-500 mx-4 px-8 ph-1 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500'
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
