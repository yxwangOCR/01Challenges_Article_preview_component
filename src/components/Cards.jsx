import useToggle from "../useToggle";

const Cards = ({ imgUrl, title, name, date, profile, description }) => {
  const [isToggled, setToggle] = useToggle(false);

  return (
    <div className='card'>
      <img className='card__image' src={imgUrl} alt={title} />
      <div className='card__content'>
        <p className='card__title'>{title}</p>
        <p className='card__text'>{description}</p>
        {isToggled ? (
          <div className='card__footer'>
            <div className='card__footer__info'>
              <img src={profile} alt={name} />
              <div>
                <p>{name}</p>
                <p>{date}</p>
              </div>
            </div>
            <span className='card__footer__share' onClick={setToggle}>
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
            <span className='card__footer__share' onClick={setToggle}>
              <i className='ri-share-forward-fill'></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
