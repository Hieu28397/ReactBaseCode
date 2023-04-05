import React from 'react';
// import { Link } from 'react-router-dom';
// import { LOCATIONS } from 'constant';
import PropTypes from 'prop-types';

const Blog = (props) => {
  const { blogList, actionGetBlogs } = props;

  console.log('blogList »»»»»', blogList);

  React.useEffect(() => {
    actionGetBlogs();
  }, [actionGetBlogs]);

  return (
    <div>
      <h1>Blog</h1>

      <ul className="list-unstyled">
        {blogList.map((blog) => (
          <li className="media my-4" key={blog.id}>
            <img src={blog.image} className="mr-3" alt="..." />

            <div className="media-body">
              <h5 className="mt-0 mb-1">{blog.title}</h5>
              <p>{blog.content}</p>
            </div>
          </li>
        ))}
      </ul>
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
