import { connect } from 'react-redux';
import { GET_BLOGS } from 'store/blogs/actionType';

import Blog from './Blog';

const mapStateToProps = (state) => ({
  loadingBlogs: state.Blogs.loadingBlogs,
  blogList: state.Blogs.blogList,
});

const mapDispatchToProps = (dispatch) => ({
  actionGetBlogs: () =>
    dispatch({
      type: GET_BLOGS,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
