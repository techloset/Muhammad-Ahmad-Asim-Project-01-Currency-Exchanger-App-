
import CurrencyCard from "../../components/currencyCard";
import Select from 'react-select';

export default function Home() {
  return (
    <div>
      <div className="first" >
        <h1 className="text-center font-roboto text-6xl font-bold leading-16 text-gray-800">Currency Converter</h1>
        <p className="text-center mt-5 font-roboto text-base font-normal leading-7 text-gray-700">
          Need to make an international business payment? Take a look at our live foreign exchange rates.</p>
        <div className="mt-14  ">
          <CurrencyCard />
        </div>
      </div>

      <div className="my-48 text-center justify-center ">
        <h1 className="text-gray-900 font-roboto text-4xl font-bold leading-10">Let’s save you some time</h1>
        <p className="mt-6">If you’ve got a target exchange rate in mind but haven’t got time to keep tabs <br /> on market movement, then a firm order could be perfect for you. When your <br /> chosen rate is reached, we’ll act immediately, leaving you free to concentrate <br /> on your business.</p>
        <a href="/IndividualCurrency"> <button className="rounded-sm mt-4 bg-red-500 h-10 text-white p-4" >Find out more</button></a>
      </div>
      <div className="bg-blue-100 h-48 ">

        <h1 className="text-center text-gray-900 font-roboto  text-4xl font-bold leading-10">Popular currencies</h1>
        <div className='flex justify-center items-center mb-12 mt-16'>

          <Select
            id="currency"
            placeholder="Select a currency"
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
            className="currency-select h-2 mb-10 w-1/2"
            menuPosition="fixed" // Set menu position to fixed
          />
          <a href="/IndividualCurrency"> <button className="w-48 mb-4 h-8 mt-3 flex-shrink-0 rounded-sm bg-red-500 border-none text-white font-roboto text-base leading-46 cursor-pointer">
            GO
          </button></a>
        </div>
      </div>





    </div>
  )
}
