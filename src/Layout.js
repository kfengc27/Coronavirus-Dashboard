import React from 'react';

import { Navigation } from './components';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container-fluid">{children}</main>
    </>
  );
}
