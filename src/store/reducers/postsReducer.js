/* eslint-disable default-param-last */
const initialState = {
  posts: [],
  queryParameters: {
    _limit: 20,
    _page: 1,
    title_like: null,
  },
};
// searches posts with titles
// https://jsonplaceholder.typicode.com/posts?title_like=qui

// all parameters:
// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20&title_like=qu

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_POSTS': {
      const newState = {
        ...state,
        posts: {
          ...action.payload,
        },
      };
      console.log('new state: ', newState);
      return newState;
    }
    case 'SET_PAGE_NUM': {
      return { ...state, queryParameters: { page: action.payload } };
    }
    case 'SET_POSTS_TITLE_SUBSTRING': {
      return { ...state, queryParameters: { title_like: action.payload } };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
