import { faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Map.module.scss';

export default function Map() {
  return (
    <section>
      <h1>
        <FontAwesomeIcon icon={faMap} /> Map
      </h1>
      <article>
        <iframe
          className={styles.frame}
          src="https://maphub.net/embed/81509?legend=1&panel=1"
          title="maphub"
        />
      </article>
    </section>
  );
}
