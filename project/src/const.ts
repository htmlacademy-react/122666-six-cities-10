export enum AppRoute {
  Root = '/',
  Favorites = 'favorites',
  Room = 'offer/:id',
  Login = '/login',
  NotFound = '/not-found'
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'No_AUTH',
  Unknown = 'UNKNOWN'
}
