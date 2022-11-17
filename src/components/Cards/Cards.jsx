import "./Cards.css";
import useToggle from "../../useToggle";
import Icons from "../Icons/Icons";

const Cards = ({ imgUrl, title, name, date, profile, description }) => {
  const [isToggled, setToggle] = useToggle(false);

  return (
    <>
      <div className='card'>
        <img src={imgUrl} alt={title} />
        <div className='card__content'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className='card__content__author'>
            <div className='card__content__author__info__container'>
              <img src={profile} alt={name} />
              <div className='card__content__author__info'>
                <h3>{name}</h3>
                <p>{date}</p>
              </div>
            </div>
            {isToggled && <Icons />}
            <span className='share__icon' onClick={setToggle}>
              <i className='ri-share-forward-fill'></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
