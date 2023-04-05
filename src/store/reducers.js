import { combineReducers } from 'redux';
import Blogs from 'store/blogs/reducer';

const rootReducer = combineReducers({
  Blogs,
});

export default rootReducer;
