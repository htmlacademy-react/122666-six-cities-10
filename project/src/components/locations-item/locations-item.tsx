import {Offers} from '../../types/offers';
import FavoritePlace from '../../components/favorite-place/favorite-place';

type LocationsItemProps = {
  favoriteOffers: Offers;
  cityName:string
}

function LocationsItem({favoriteOffers, cityName}:LocationsItemProps):JSX.Element {
  const filteredOffers = favoriteOffers.filter((offer)=>offer.city.name === cityName);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {filteredOffers.map((offer) => <FavoritePlace key={`place-${offer.id}`} offer={offer} />)}
      </div>
    </li>
  );
}

export default LocationsItem;
