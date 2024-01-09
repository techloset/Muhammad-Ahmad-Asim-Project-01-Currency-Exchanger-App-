import CurrencyCard from "../../components/currencyCard";


export default function Home() {
  return (
    <div>
      <div className="first" >
        <h1 className="text-center font-roboto text-6xl font-bold leading-16 text-gray-800">Currency Converter</h1>
        <p className="text-center mt-5 font-roboto text-base font-normal leading-7 text-gray-700">
          Need to make an international business payment? Take a look at our live foreign exchange rates.</p>
      <div className="mt-14 ">
      <CurrencyCard/>
      </div>
      </div>
    </div>
  )
}
