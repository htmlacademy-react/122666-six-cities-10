import { Offers } from '../types/offers';


const offers: Offers = [
  {
    id:1,
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    type:'apartment',
    previewImage: 'img/apartment-01.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 33.33333,
        longitude: 33.3333,
        zoom: 1
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 33.33333,
      longitude: 33.3333,
      zoom: 1
    },
  },
  {
    id:2,
    isPremium: false,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage:'img/apartment-01.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 33.33333,
        longitude: 33.3333,
        zoom: 1
      },
      name: 'Cologne'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 33.33333,
      longitude: 33.3333,
      zoom: 1
    },
  },
  {
    id:3,
    isPremium: false,
    price: 132,
    isFavorite: true,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type:'apartment',
    previewImage: 'img/apartment-02.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 33.33333,
        longitude: 33.3333,
        zoom: 1
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 33.33333,
      longitude: 33.3333,
      zoom: 1
    },
  },
  {
    id:4,
    isPremium: true,
    price: 180,
    isFavorite: false,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type:'apartment',
    previewImage: 'img/apartment-03.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 33.33333,
        longitude: 33.3333,
        zoom: 1
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 33.33333,
      longitude: 33.3333,
      zoom: 1
    },
  },
  {
    id:5,
    isPremium: true,
    price: 80,
    isFavorite: true,
    rating: 4,
    title: 'Wood and stone place',
    type:'private room',
    previewImage: 'img/room.jpg',
    maxAdults: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 33.33333,
        longitude: 33.3333,
        zoom: 1
      },
      name: 'Amsterdam'
    },
    description: '',
    goods: ['good1', 'good2'],
    host: {
      avatarUrl: '',
      id: 1,
      isPro: true,
      name: ''
    },
    images: ['img/apartment-01.jpg'],
    location: {
      latitude: 33.33333,
      longitude: 33.3333,
      zoom: 1
    },
  },
];

export default offers;
