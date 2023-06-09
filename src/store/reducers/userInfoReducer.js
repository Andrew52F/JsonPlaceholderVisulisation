/* eslint-disable default-param-last */
const initialState = {
  userState: 'fulfilled',
  userData: {
    userId: null,
    name: '',
    username: '',
    contacts: {
      email: '',
      phone: '',
      website: '',
    },
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrases: '',
      bs: [],
    },
  },
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO_STATE': {
      console.log('REJECTED !!!!!');
      const newState = {
        ...state,
        userState: action.payload,
      };
      console.log('new STATE ', newState);
      return newState;
    }
    case 'STORE_USER_INFO': {
      const userData = action.payload;
      const contactsKeysArray = ['phone', 'email', 'website'];
      const contacts = {};
      const contactlessUserData = {};
      Object
        .keys(userData)
        .forEach((key) => {
          if (contactsKeysArray.includes(key)) {
            contacts[key] = userData[key];
          } else {
            contactlessUserData[key] = userData[key];
          }
        });
      if (contactlessUserData.company) {
        contactlessUserData.company.bs = contactlessUserData.company.bs.split(' ');
      }
      return {
        ...state,
        userData: {
          ...contactlessUserData,
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
