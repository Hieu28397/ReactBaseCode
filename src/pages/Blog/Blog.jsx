import React from 'react';
import PropTypes from 'prop-types';

import CardBlog from 'components/CardBlog';
import Pagination from 'components/Pagination';

const Blog = (props) => {
  const { blogList, actionGetBlogs } = props;

  React.useEffect(() => {
    actionGetBlogs();
  }, [actionGetBlogs]);

  return (
    <div>
      <h1>Blog</h1>

      <ul className="list-unstyled">
        <CardBlog blogList={blogList} />
      </ul>

      <Pagination />
    </div>
  );
};

Blog.propTypes = {
  blogList: PropTypes.instanceOf(Array),

  actionGetBlogs: PropTypes.func.isRequired,
};

Blog.defaultProps = {
  blogList: [],
};

export default Blog;
