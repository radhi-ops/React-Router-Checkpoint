import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
