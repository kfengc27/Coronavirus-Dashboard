import React from 'react';
import { Container } from 'reactstrap';

import { Navigation } from './components';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Container tag="main" fluid={true}>
        {children}
      </Container>
    </>
  );
}
