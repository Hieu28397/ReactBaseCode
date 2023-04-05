import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from 'constant';

const Table = () => (
  <div>
    <h1>Table</h1>

    <ul className="list-unstyled">
      <li className="media">
        <img src="https://picsum.photos/200/300" className="mr-3" alt="..." />
        <div className="media-body">
          <Link to={LOCATIONS.HOME_PAGE} className="mt-0 mb-1">
            <h2>List-based media object</h2>
          </Link>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </li>
      <li className="media my-4">
        <img src="https://picsum.photos/200/300" className="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">List-based media object</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </li>
    </ul>
  </div>
);

export default Table;
