import { useState } from "react";

const Cards = ({ imgUrl, title, description, name, date, profile }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className='bg-White rounded-lg m-6 drop-shadow-md sm:w-[330px] sm:h-[510px] md:flex md:w-[740px] md:h-[280px]'>
      <img
        className='sm:w-[330px] sm:h-[200px] rounded-t-lg md:w-[290px] md:h-[280px] md:rounded-t-none md:rounded-l-lg'
        src={imgUrl}
        alt={title}
      />
      <div className='flex flex-col mx-4 p-2'>
        <div className='flex flex-col justify-between'>
          <p className='text-Title text-base px-2 pt-6 pb-2 font-medium leading-normal md:text-xl'>
            {title}
          </p>
          <p className='text-Text text-xs px-2 leading-normal'>{description}</p>
          {window.innerWidth < 768 && (
            <div className='flex items-center justify-between gap-[3rem] mt-[2.5rem] fixed bottom-0 p-6 sm:left-0 sm:w-[330px] sm:h-[70px] md:w-[450px] md:left-[18rem]'>
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
              {isToggled && (
                <div className=' bg-Title flex items-center justify-between gap-[3rem] sm:fixed sm:bottom-0 sm:left-0 sm:rounded-b-lg sm:w-[330px] sm:h-[70px] sm:p-6 '>
                  <div className='text-White bg-Title flex justify-between items-center sm:gap-[1rem] text-sm sm:px-2'>
                    <span className='tracking-wider text-Share'>SHARE</span>
                    <i className='ri-facebook-box-fill text-2xl'></i>
                    <i className='ri-twitter-fill text-2xl'></i>
                    <i className='ri-pinterest-fill text-2xl'></i>
                  </div>
                  <span
                    className='text-White bg-Text w-8 h-8 rounded-full text-center flex items-center justify-center cursor-pointer md:'
                    onClick={() => setToggle(!isToggled)}>
                    <i className='ri-share-forward-fill'></i>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {window.innerWidth >= 768 && (
          <div>
            {isToggled && (
              <div className='md:bg-Title md:absolute top-[10rem] right-[-68px] px-8 py-2 rounded-lg'>
                <div className='text-White bg-Title flex justify-between items-center gap-3'>
                  <span className='tracking-widest text-sm text-Share'>
                    SHARE
                  </span>
                  <i className='ri-facebook-box-fill text-2xl'></i>
                  <i className='ri-twitter-fill text-2xl'></i>
                  <i className='ri-pinterest-fill text-2xl'></i>
                </div>
                <span className='border-[15px] border-t-Title border-l-white absolute top-[2.9rem] left-[100px] border-l-[transparent] border-r-[transparent] border-b-[transparent]'></span>
              </div>
            )}
            <div className='flex items-center justify-between gap-[3rem] mt-[2.5rem] fixed bottom-0 p-6 sm:left-0 sm:w-[330px] sm:h-[70px] md:w-[450px] md:left-[18rem]'>
              <div className='flex justify-between items-center gap-2 px-2 '>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
