import { GET_BLOGS, GET_BLOGS_FAILED, GET_BLOGS_SUCCESS } from './actionType';

const initialState = {
  loadingBlogs: false,

  blogList: [],
};

const blog = (state = initialState, action) => {
  switch (action.type) {
    // GET_BLOGS
    case GET_BLOGS:
      return {
        ...state,
        loadingBlogs: true,
      };

    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loadingBlogs: false,
        blogList: action.payload,
      };

    case GET_BLOGS_FAILED:
      return {
        ...state,
        loadingBlogs: false,
      };

    default:
      return state;
  }
};

export default blog;
