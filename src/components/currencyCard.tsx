
// export default function CurrencyCard() {
//   return (
//     <div className="rounded-md bg-white shadow-md p-4 w-2/3 mx-auto">
//       <h1 className="text-center font-roboto text-2xl font-bold leading-7 text-gray-800 mt-6 mb-6">
//         Make fast and affordable <br /> international business payments
//       </h1>
//       <p className="text-gray-700 font-roboto text-base text-center font-bold leading-6">
//         Send secure international business payments in XX currencies, all at competitive rates with no hidden fees.</p>

//         <div className="flex flex-col sm:flex-row">
//       <div className="rounded-md border w-full sm:w-1/2 border-gray-300 bg-white p-4 mb-4 sm:mb-0">
//         <p>Amount</p>
//         <input type="text" placeholder="sdjfjd" className=" border-none w-3/4 h-10 focus:outline-none "/>
//         <select
//                 id="currency"
//                 name="currency"
//                 className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               >
                
//                 <option>USD</option>
//                 <option>CAD</option>
//                 <option>AUD</option>
//                 <option>EUR</option>
//                 <option>GBP</option>
//                 <option>CNH</option>
//                 <option>JPY</option>
//                 <option>HKD</option>
//                 <option>SGD</option>
//                 <option>NZD</option>
//               </select>
//       </div>






//       <div className="rounded-md border w-full sm:w-1/2 border-gray-300 bg-white p-4">
//         <p>Amount</p>
//         <input type="text" placeholder="sdjfjd"/>
//         <select
//                 id="currency"
//                 name="currency"
//                 className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               >
//                 <option>USD</option>
//                 <option>CAD</option>
//                 <option>AUD</option>
//                 <option>EUR</option>
//                 <option>GBP</option>
//                 <option>CNH</option>
//                 <option>JPY</option>
//                 <option>HKD</option>
//                 <option>SGD</option>
//                 <option>NZD</option>
//               </select>
//       </div>
//     </div>


// {/* <div className="flex flex-col sm:flex-row  border-gray-300 bg-white p-4">
// <div className="rounded-md border  w-1/2">
//   <p>Amount</p>
//   <input type="text" placeholder="sdjfjd" />
// </div>
// <div className="rounded-md border  w-1/2  border-gray-300 bg-white p-4">
//   <p>Amount</p>
//   <input type="text" placeholder="sdjfjd" />
// </div>
// </div> */}

// {/* 
//       <div>
//         <div>
//           <label htmlFor="">Amount</label>
//           <div className="relative mt-2 rounded-md shadow-sm">

//             <input
//               type="text"
//               name="price"
//               id="price"
//               className="block w-1/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               placeholder="0.0"
//             />

//             <div className="absolute inset-y-0 left-64 flex items-center">
//               <label htmlFor="currency" className="sr-only">
//                 Currency
//               </label>
//               <select
//                 id="currency"
//                 name="currency"
//                 className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//               >
//                 <option>USD</option>
//                 <option>CAD</option>
//                 <option>AUD</option>
//                 <option>EUR</option>
//                 <option>GBP</option>
//                 <option>CNH</option>
//                 <option>JPY</option>
//                 <option>HKD</option>
//                 <option>SGD</option>
//                 <option>NZD</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}












//     </div>
//   )
// }








import React from 'react';
import Select from 'react-select';


export default function CurrencyCard() {
  return (
    <div className="rounded-md bg-white shadow-md p-4 w-2/3 mx-auto">
      <h1 className="text-center font-roboto text-2xl font-bold leading-7 text-gray-800 mt-6 mb-6">
        Make fast and affordable <br /> international business payments
      </h1>
      <p className="text-gray-700 font-roboto text-base text-center font-bold leading-6">
        Send secure international business payments in XX currencies, all at competitive rates with no hidden fees.
      </p>

      <div className="flex flex-col sm:flex-row">
        <div className="rounded-md border  w-full sm:w-2/3 border-gray-300 bg-white p-4 mb-4 sm:mb-0">
          <p>Amount</p>
          <div className='flex'> 
          <input type="text" placeholder="sdjfjd" className="border-none w-3/4 h-17 focus:outline-none" />
          <Select
          
            id="currency"
            name="currency"
            options={[
              { value: 'USD', label: 'USD' },
              { value: 'CAD', label: 'CAD' },
              { value: 'AUD', label: 'AUD' },
              { value: 'EUR', label: 'EUR' },
              { value: 'GBP', label: 'GBP' },
              { value: 'CNH', label: 'CNH' },
              { value: 'JPY', label: 'JPY' },
              { value: 'HKD', label: 'HKD' },
              { value: 'SGD', label: 'SGD' },
              { value: 'NZD', label: 'NZD' },
            ]}
            className="currency-select h-17  w-24"
            menuPosition="fixed" // Set menu position to fixed
          />
          </div>
        </div>
<button className='ml-4 mr-4 mb-4 w-6'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="" /></button>
        <div className="rounded-md border w-full sm:w-2/3 border-gray-300 bg-white p-4">
          <p>Converted to</p>
          <div className='flex'>
          <input type="text" placeholder="sdjfjd" className="border-none w-3/4 h-17 focus:outline-none" />
          <Select
            id="currency"
            name="currency"
            options={[
              { value: 'USD', label: 'USD' },
              { value: 'CAD', label: 'CAD' },
              { value: 'AUD', label: 'AUD' },
              { value: 'EUR', label: 'EUR' },
              { value: 'GBP', label: 'GBP' },
              { value: 'CNH', label: 'CNH' },
              { value: 'JPY', label: 'JPY' },
              { value: 'HKD', label: 'HKD' },
              { value: 'SGD', label: 'SGD' },
              { value: 'NZD', label: 'NZD' },
            ]}
            className="currency-select h-17  w-24"
            menuPosition="fixed" // Set menu position to fixed
          />
          </div>
        </div>
      </div>
    </div>
  );
}
