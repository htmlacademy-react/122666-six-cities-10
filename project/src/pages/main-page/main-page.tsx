import { useState } from 'react';
import Place from '../../components/place/place';
import Map from '../../components/map/map';
import CityTab from '../../components/city-tab/city-tab';
import {cities} from '../../mocks/points';
// import {cities} from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/actions';


function MainPage(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number>();
  const {offers, city} = useAppSelector((state)=>state);

  const dispatch = useAppDispatch();

  const onCityChange = (cityName: string) => {
    dispatch(changeCity(cityName));
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const placesAmount = filteredOffers.length;
  const cityFull = cities.filter((item) => item.name === city)[0];
  const citiesNames = cities.map((item)=>item.name);
  const points = filteredOffers.map((item)=>({latitude: item.location.latitude,longitude: item.location.longitude, title:item.title}));
  const selectedPoint = points[0];

  return(
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {citiesNames.map((cityName)=><CityTab key={cityName} cityName={cityName} activeCity={city} onCityChange={onCityChange}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesAmount} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {filteredOffers.map((offer) => <Place key={`place-${offer.id}`} offer={offer} isActive={offer.id === activeCardId} setActive={setActiveCardId}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityFull} points={points} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
