import { useState } from 'react';
import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import PremiumStateLabel from '../../components/premium-state-label/premium-state-label';

type PlaceProps = {
  offer: Offer,
  isActive:boolean,
  setActive: (id:number)=>void
}

function Place({offer, isActive, setActive}:PlaceProps): JSX.Element {
  const {isFavorite, isPremium, id, previewImage, title, price, rating, type} = offer;
  const [offerIsFavorite, setIsFavorite] = useState(isFavorite);
  const bookmarkBtnClassName = offerIsFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button';
  const roomLink = `offer/${id}`;
  const formattedOfferType = `${type[0].toUpperCase()}${type.substring(1)}`;

  return (
    <article className="cities__card place-card" onMouseOver={() => setActive(id)}>
      { isPremium && <PremiumStateLabel className='place-card__mark'/> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkBtnClassName} type="button" onClick={()=>{setIsFavorite(!offerIsFavorite);}}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={roomLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{formattedOfferType}</p>
      </div>
    </article>
  );
}

export default Place;
