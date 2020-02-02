import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Navbar,
  NavItem,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from 'reactstrap';

import * as ROUTES from '../routes';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="lg" dark color="dark" className={styles.nav}>
      <NavbarBrand href="/data">
        <span className="mr-2">
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        nCov2019.live
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {Object.values(ROUTES).map(({ path, title }) => (
            <NavItem key={path}>
              <NavLink
                tag={RouterNavLink}
                to={path}
                className={classnames('font-weight-bolder', styles.link)}
              >
                {title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
