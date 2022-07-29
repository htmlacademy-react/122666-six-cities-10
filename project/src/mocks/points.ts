import { Points,Point } from '../types/points';
import { City } from '../types/offers';

export const points:Points = [
  {
    title: 'Title 1',
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  {
    title: 'Title 2',
    latitude: 52.369553943508,
    longitude: 4.85309666406198
  },
  {
    title: 'Title 3',
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  },
  {
    title: 'Title 4',
    latitude: 52.3809553943508,
    longitude: 4.939309666406198
  },
];

export const city:City = {
  location: {
    latitude: 52.377956,
    longitude: 4.897070,
    zoom:10
  },
  name: 'Amsterdam'
};

export const selectedPoint:Point = {
  title: 'Amsterdam',
  latitude: 52.377956,
  longitude: 4.897070
};


