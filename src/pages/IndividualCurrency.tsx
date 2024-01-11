import React from 'react';
import img from "../assets/Vector.png"
import Card from "../components/card"

export default function IndividualCurrency() {
  return (
    <div className="overflow-x-hidden mb-[80px]">
      <div className="flex flex-col sm:flex-row mt-14 justify-center bg-blue-100">
        <div className="ml-[20px] ">
          <h1 className="text-center mt-20 mb-4 font-roboto text-6xl font-bold leading-16 text-gray-900">United States Dollar</h1>
          <p>The United States Dollar is the official currency of the United States and several other <br /> countries. Its currency code is USD and it’s symbolised using the $ sign. $1 is made <br /> up of 100cents. With a World Account, you can pay and collect USD using local <br /> bank details – and you don’t need an overseas address.</p>
          <button className="rounded-sm mt-6 bg-red-500 h-14 mb-20 text-white p-4" >Compare rates</button>
        </div>
        <div className="mt-20 ml-[30px]">
          <img src={img} alt="image not found" width={500} />
        </div>
      </div>
      <div>
        <h1 className="text-center font-roboto text-3xl font-bold leading-7 text-gray-900 mb-[35px] mt-[100px]"> Exchange USD without hidden fees</h1>
        <p className="text-center font-roboto text-base font-normal leading-6 text-gray-900 mb-[50px]">Wherever you need to send US dollars, our pricing is clear and simple. Our model is made up <br />of two parts: an FX rate and a small payment fee – that’s it. So what you see at the time of <br /> your transaction is exactly what you’ll pay – there are no hidden charges.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mb-[10px]">
  <a href="/Aud"><Card title="USD" description="AUD"  /></a>
  <a href="/Cad"><Card  title="USD" description="CAD"  /></a>
  <a href="/Cnh"><Card  title="USD" description="CNH"  /></a>
  <a href="/Eur"><Card  title="USD" description="EUR"  /></a>
</div>
<div className="flex flex-col sm:flex-row justify-center mb-[10px]">
  <a href="/Gbp"><Card  title="USD" description="GBP"  /></a>
  <a href="/Hkd"><Card  title="USD" description="HKD"  /></a>
  <a href="/Jpy"><Card  title="USD" description="JPY"  /></a>
  <a href="/Nzd"><Card  title=" USD" description="NZD"  /></a>
</div>
<div className="flex flex-col sm:flex-row justify-center mb-[10px]">
  <a href="/Sgd"><Card  title=" USD" description="SGD"  /></a>
</div>

    </div>
  )
}
