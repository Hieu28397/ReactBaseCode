import React, { memo } from 'react';
import PropTypes from 'prop-types';

const AppLoading = (props) => {
  const { loading } = props;

  return (
    loading && (
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>
    )
  );
};

AppLoading.propTypes = {
  loading: PropTypes.bool,
};

AppLoading.defaultProps = {
  loading: false,
};

export default memo(AppLoading);
