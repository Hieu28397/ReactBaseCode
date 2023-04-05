import { all, fork } from 'redux-saga/effects';
import BlogSaga from 'store/blogs/saga';

export default function* rootSaga() {
  yield all([fork(BlogSaga)]);
}
