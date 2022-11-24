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
        <p className='text-Title text-base px-2 py-4 font-medium leading-tight'>
          {title}
        </p>
        <p className='text-Text text-sm px-2 leading-tight'>{description}</p>
        {isToggled ? (
          <div className='flex items-center justify-between absolute bottom-5'>
            <div className='flex justify-between items-center gap-2 px-2'>
              <img src={profile} alt={name} className='w-8 h-8 rounded-full' />
              <div>
                <p className='text-xs'>{name}</p>
                <p className='text-xs'>{date}</p>
              </div>
            </div>
            <span
              className='card__footer__share'
              onClick={() => setToggle(!isToggled)}>
              <i className='ri-share-forward-fill'></i>
            </span>
          </div>
        ) : (
          <div className='card__footer__toggled'>
            <div className='social__media'>
              <span>SHARE</span>
              <i className='ri-facebook-box-fill'></i>
              <i className='ri-twitter-fill'></i>
              <i className='ri-pinterest-fill'></i>
            </div>
            <span
              className='card__footer__share'
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
