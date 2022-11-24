import { useState } from "react";

const Cards = ({ imgUrl, title, name, date, profile, description }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className='bg-White rounded-lg m-6 drop-shadow-md tiny:w-[330px] tiny:h-[510px] md:flex md:w-[740px] md:h-[280px]'>
      <img
        className='tiny:w-[330px] tiny:h-[200px] rounded-t-lg md:w-[290px] md:h-[280px] md:rounded-t-none md:rounded-l-lg'
        src={imgUrl}
        alt={title}
      />
      <div className='flex flex-col justify-between mx-4 p-2'>
        <p className='text-Title text-base px-2 pt-6 pb-2 font-medium leading-normal md:text-xl'>
          {title}
        </p>
        <p className='text-Text text-xs px-2 leading-normal'>{description}</p>
        {isToggled ? (
          <div className='flex items-center justify-between tiny:gap-[3rem] fixed bottom-0 left-0 tiny:w-[330px] tiny:h-[70px] tiny:p-6 md:relative md:p-0 md:m-0 md:w-[390px]'>
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
          <div className='toggle bg-Title flex items-center justify-between tiny:gap-[3rem] fixed bottom-0 left-0 rounded-b-lg tiny:w-[330px] tiny:h-[70px] tiny:p-6 md:relative'>
            <div className='text-White bg-Title flex justify-between items-center tiny:gap-[1rem] text-sm tiny:px-2'>
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
