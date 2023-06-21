/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/default-param-last */
import {
  UserInfoActionTypes, UserInfoState,
} from '../../types/redux';
import {
  UserInfoContacts, IUserInfoContactless, IUserInfo, IUserInfoRaw,
} from '../../types';

const contacts: UserInfoContacts = {
  email: '',
  phone: '',
  website: '',
};

const contactlessUserInfo: IUserInfoContactless = {
  userId: null,
  name: '',
  username: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: null,
      lng: null,
    },
  },
  company: {
    name: '',
    catchPhrases: '',
    bs: '',
  },
};

const userData: IUserInfo = {
  ...contactlessUserInfo,
  contacts,
};

const initialState: UserInfoState = {
  userState: 'fulfilled',
  userData,
};

const userInfoReducer = (state = initialState, action: UserInfoActionTypes): UserInfoState => {
  switch (action.type) {
    case 'SET_USER_INFO_STATE': {
      const newState = {
        ...state,
        userState: action.payload,
      };
      return newState;
    }
    case 'STORE_USER_INFO': {
      const newUserData: IUserInfoRaw = action.payload;
      // eslint-disable-next-line max-len
      const newContacts: UserInfoContacts & { [key: string]: string | number | null | object } = JSON.parse(JSON.stringify(contacts));
      // eslint-disable-next-line max-len
      const newContactlessUserInfo: IUserInfoContactless & { [key: string]: string | number | null | object } = (
        JSON.parse(JSON.stringify(contactlessUserInfo))
      );
      Object.entries(newUserData).forEach(([key, value]) => {
        if (newContacts.hasOwnProperty(key)) {
          newContacts[key] = value;
        } else {
          newContactlessUserInfo[key] = value;
        }
      });
      return {
        ...state,
        userData: {
          ...newContactlessUserInfo,
          contacts,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default userInfoReducer;
