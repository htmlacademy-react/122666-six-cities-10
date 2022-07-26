import { Offers } from '../types/offers';


const offers: Offers = [
  {
    id:1,
    isPremium: true,
    price: 120,
    isFavorite: false,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type:'studio',
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
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 25,
      isPro: true,
      name: 'Angelina'
    },
    images: ['https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
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
