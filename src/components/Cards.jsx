import { useState } from "react";

const Cards = ({ imgUrl, title, name, date, profile, description }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className='bg-White rounded-lg m-6 drop-shadow-md w-[330px] h-[510px]'>
      <img
        className='w-[330px] h-[200px] rounded-t-lg'
        src={imgUrl}
        alt={title}
      />
      <div className='flex flex-col justify-between mx-4 p-2'>
        <p className='text-Title text-base px-2 pt-6 pb-2 font-medium leading-normal'>
          {title}
        </p>
        <p className='text-Text text-xs px-2 leading-normal'>{description}</p>
        {isToggled ? (
          <div className='flex items-center justify-between gap-[3rem] fixed bottom-0 left-0 w-[330px] h-[70px] p-6'>
            <div className='flex justify-between items-center gap-2 px-2'>
              <img
                src={profile}
                alt={name}
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <p className='text-sm font-medium text-Title'>{name}</p>
                <p className='text-xs font-normal text-Text'>{date}</p>
              </div>
            </div>
            <span
              className='w-8 h-8 rounded-full bg-Body text-Title text-center flex items-center justify-center cursor-pointer'
              onClick={() => setToggle(!isToggled)}>
              <i className='ri-share-forward-fill'></i>
            </span>
          </div>
        ) : (
          <div className='bg-Title flex items-center justify-between gap-[3rem] fixed bottom-0 left-0 rounded-b-lg w-[330px] h-[70px] p-6'>
            <div className='text-White bg-Title flex justify-between items-center gap-[1rem] text-sm px-2'>
              <span className='tracking-wider text-Share'>SHARE</span>
              <i className='ri-facebook-box-fill text-2xl'></i>
              <i className='ri-twitter-fill text-2xl'></i>
              <i className='ri-pinterest-fill text-2xl'></i>
            </div>
            <span
              className='text-White bg-Text w-8 h-8 rounded-full text-center flex items-center justify-center cursor-pointer'
              onClick={() => setToggle(!isToggled)}>
              <i className='ri-share-forward-fill'></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
