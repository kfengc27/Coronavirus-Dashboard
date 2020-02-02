import React from 'react';

import { Navigation } from './components';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
