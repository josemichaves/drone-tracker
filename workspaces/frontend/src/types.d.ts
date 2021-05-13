export interface Drone {
  id: string;
  name: string;
  from: string;
  to_lat: number;
  to_lon: number;
  speed: number;
  battery: number;
  address: string;
}

interface Base {
  city: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  number: number;
  postcode: string;
  street: string;
}

export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  exists: boolean;
}

export interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordCheck: string;
}

export interface UserReponse {
  ok: string;
  email: string;
  firstname: string;
  lastname: string;
  usertoken: string;
  err: string;
}