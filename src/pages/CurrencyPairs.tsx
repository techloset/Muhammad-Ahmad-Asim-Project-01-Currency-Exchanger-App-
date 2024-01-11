import CurrencyCard from "../components/currencyCard";


export default function CurrencyPairs() {
  return (
    <div>

        <div className="bg-blue-100 h-[300px]">

        
                <h1 className="text-center font-roboto text-gray-900 text-6xl font-bold leading-100 mt-20 ">Convert USD to any Currency</h1>
            <div className="relative mt-[120px]">
            <CurrencyCard/>
            </div>
        </div>
      
    </div>
  )
}
