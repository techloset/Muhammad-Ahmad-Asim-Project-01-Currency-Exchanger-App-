


import React from 'react';
import { useLocation } from 'react-router-dom';

interface CardProps {
  description: string;
}

const Card: React.FC<CardProps> = (props) => {
  const location = useLocation();
  const currency = new URLSearchParams(location.search).get('currency');
  const { description } = props;

  // Condition for not showing the result
  const shouldNotShowResult = currency === description;

  return (
    <div className='text-black'>
      {!shouldNotShowResult && (
        <div className="ml-[20px] mt-[50px]  flex flex-col sm:flex-row bg-gray-100 p-8 w-[250px]">
          <p className="text-lg font-bold">{currency}</p>
          <div className="w-[40px] mt-[5px] mx-[14px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgQIwRAY0urU9xf4NDPdi3BoxA7hkS_Ip7A&usqp=CAU" alt="" />
          </div>
          <p className="text-lg font-bold">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
