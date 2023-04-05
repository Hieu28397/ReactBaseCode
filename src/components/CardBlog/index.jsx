import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardBlog(props) {
  const { blogList } = props;

  return (
    <div>
      {blogList.map((blog) => (
        <li className="media my-4" key={blog.id}>
          <img src={blog.image} className="mr-3" alt="..." />

          <div className="media-body">
            <h5 className="mt-0 mb-1">{blog.title}</h5>
            <p>{blog.content}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

CardBlog.propTypes = {
  blogList: PropTypes.instanceOf(Array).isRequired,
};

export default memo(CardBlog);
