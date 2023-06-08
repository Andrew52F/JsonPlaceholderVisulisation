/* eslint-disable default-param-last */
const initialState = {
  postsState: 'fulfilled',
  commentsState: 'fulfilled',
  posts: [],
  comments: [],
  pagesCount: null,
};
// searches posts with titles
// https://jsonplaceholder.typicode.com/posts?title_like=qui

// all parameters:
// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20&title_like=qu

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS_STATE': {
      return { ...state, postsState: action.payload };
    }
    case 'SET_COMMENTS_STATE': {
      return { ...state, commentsState: action.payload };
    }
    case 'STORE_POSTS': {
      const newState = {
        ...state,
        posts: [
          ...action.payload,
        ],
      };
      return newState;
    }
    case 'REMOVE_POSTS': {
      return {
        ...state,
        posts: [],
      };
    }
    case 'STORE_COMMENTS': {
      const data = action.payload;
      const newState = {
        ...state,
        comments: [
          ...data,
        ],
      };
      return newState;
    }
    case 'REMOVE_COMMENTS': {
      return {
        ...state,
        comments: [],
      };
    }
    case 'SET_POSTS_PARAMS': {
      return {
        ...state, queryParameters: { ...state.queryParameters, ...action.payload },
      };
    }
    case 'SET_PAGES_COUNT': {
      return {
        ...state,
        pagesCount: action.payload,
      };
    }
    case 'SET_POSTS_PARAM': {
      const { type, value } = action.payload;
      const newState = { ...state };
      newState.queryParameters[type] = value;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
