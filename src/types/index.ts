import { AxiosResponse } from 'axios';

export type IPost = {
  id: number,
  userId: number,
  title: string,
  body: string,
};

export type IComment = {
  id: number,
  postId: number,
  email: string,
  name: string,
  body: string,
};

export type IUserInfoRaw = {
  // [key: string]: string | number | null | object
  userId: number | null,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number | null,
      lng: number | null,
    }
  },
  company: {
    name: string,
    catchPhrases: string,
    bs: string,
  }
};
export type UserInfoContacts = {
  // [key: string]: string | number | null | object,
  email: string,
  phone: string,
  website: string,
};
export type IUserInfoContactless = Omit<IUserInfoRaw, keyof UserInfoContacts> & {
  // [key: string]: string | number | null | object
};
export type IUserInfo = IUserInfoContactless & {
  contacts: UserInfoContacts,
};

export type FetchResponse = AxiosResponse<IPost[] | IComment[] | IUserInfoRaw>;
