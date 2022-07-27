import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offers } from '../../types/offers';

type ExistingRoomParam = {
  offers: Offers,
  children: JSX.Element
}

function ExistingRoom({offers, children}:ExistingRoomParam): JSX.Element {
  const {id} = useParams();
  const offer = offers.filter((item) => item.id === Number(id))[0];
  return (
    offer ? children : <Navigate to={AppRoute.NotFound} />
  );
}

export default ExistingRoom;
