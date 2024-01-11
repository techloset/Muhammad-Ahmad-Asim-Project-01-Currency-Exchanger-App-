
import React from 'react';
import Select from 'react-select';



export default function Hkd() {
  return (
    <div>

        <div className="bg-blue-100 h-[300px]">

        
                <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20 ">Convert USD to HKD</h1>
            <div className="relative mt-[120px]">
           


            <div className="rounded-md relative bg-white shadow-2xl p-4 w-2/3 mx-auto">
      <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-800 mt-6 mb-8">
        Make fast and affordable <br /> international business payments
      </h1>
      <p className="text-gray-800 font-roboto text-base text-center  leading-6">
        Send secure international business payments in <b> XX </b> currencies, all at competitive rates with no hidden fees.
      </p>

      <div className="flex flex-col sm:flex-row mt-14">
        <div className="rounded-md border  w-full sm:w-2/3 border-gray-700 bg-white p-4 mb-4 sm:mb-0">
          <p>Amount</p>
          <div className='flex'>
            <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
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
              placeholder="USD"
             
              menuPosition="fixed" // Set menu position to fixed
            />
          </div>
        </div>
        <button className='ml-4 mr-4 mb-4 w-6'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNabES2MSPQkMYFEY-EBDRMzajdia8xWPA&usqp=CAU" alt="" /></button>
        <div className="rounded-md border w-full sm:w-2/3 border-gray-700 bg-white p-4">
          <p>Converted to</p>
          <div className='flex'>
            <input type="text" placeholder="Amount" className="border-none w-3/4 h-17 focus:outline-none" />
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
              className="currency-select h-17 w-24"
              
              placeholder="HKD"
              menuPosition="fixed" // Set menu position to fixed
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mt-14'>
        <p className='w-2/3 h-8 mt-2 rounded-full color-gray-900 text-black font-roboto text-base font-bold leading-10 cursor-pointer flex '>1.00 USD = 0.8875 GBP</p>
        <button className="w-1/2 h-10 mt-3 flex-shrink-0 rounded-md bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
          Get started</button>
      </div>
    </div>



            </div>
        </div>
      
    </div>
  )
}