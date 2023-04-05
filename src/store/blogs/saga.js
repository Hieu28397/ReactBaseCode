import { toast } from 'react-toastify';
import blogApi from 'api/blogApi';
import { put, takeLeading } from 'redux-saga/effects';

import { GET_BLOGS, GET_BLOGS_FAILED, GET_BLOGS_SUCCESS } from './actionType';

function* getBlogs() {
  try {
    const response = yield blogApi.getBlogs();

    yield put({
      type: GET_BLOGS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    toast.error('Lỗi', { autoClose: 3000 });
    yield put({ type: GET_BLOGS_FAILED });
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_BLOGS, getBlogs);
}
