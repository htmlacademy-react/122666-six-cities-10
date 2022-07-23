type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type City = {
  location: Location
  name: string
}

export type Offer = {
  id: number,
  isPremium: boolean,
  price: number,
  isFavorite: boolean,
  rating: number,
  title: string,
  type: string
  previewImage: string,
  maxAdults: number,
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  images: string[],
  location: Location,
}
export type Offers = Offer[];
