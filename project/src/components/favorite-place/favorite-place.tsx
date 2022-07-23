import { useState } from 'react';
import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';

type PlaceProps = {
  offer: Offer
}

function PremiumState(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function FavoritePlace({offer}:PlaceProps): JSX.Element {
  const {isFavorite, isPremium, id, title, price, rating, type, previewImage} = offer;
  const [offerIsFavorite, setIsFavorite] = useState(isFavorite);
  const [offerIsPremium] = useState(isPremium);
  const bookmarkBtnClassName = offerIsFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button';
  const roomLink = `offer/${id}`;
  return (
    <article className="favorites__card place-card">
      { offerIsPremium && <PremiumState /> }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
        <p className="place-card__type">{`${type[0].toUpperCase()}${type.substring(1)}`}</p>
      </div>
    </article>
  );
}

export default FavoritePlace;
