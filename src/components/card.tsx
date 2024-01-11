import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, description } = props;
  return (
    <div>
        <div className="ml-[20px] mt-[20px]  flex flex-col sm:flex-row bg-gray-100 p-8 w-[250px]">
            <p className="text-lg font-bold">{title}</p>
            <div className="w-[40px] mt-[5px] mx-[14px]"> 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgQIwRAY0urU9xf4NDPdi3BoxA7hkS_Ip7A&usqp=CAU" alt="" />
</div>
       <p className="text-lg font-bold">{description}</p>
        </div>
    </div>
  );
};
export default Card ;