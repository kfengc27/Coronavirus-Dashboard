import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../routes';

export default function Navigation() {
  return (
    <nav>
      {Object.values(ROUTES).map(({ path, title }) => (
        <Link to={path} key={path}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
