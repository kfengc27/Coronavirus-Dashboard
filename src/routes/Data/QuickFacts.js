import {
  faCheck,
  faSkullCrossbones,
  faHeartbeat,
  faQuestionCircle,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './QuickFacts.module.scss';

const metaMap = {
  confirmed: {
    icon: faCheck,
    text: 'Confirmed cases',
    color: 'warning',
  },
  recovered: {
    icon: faHeartbeat,
    text: 'Total Deaths',
    color: 'danger',
  },
  deaths: {
    icon: faSkullCrossbones,
    text: 'Total Recovered',
    color: 'success',
  },
  suspected: {
    icon: faQuestionCircle,
    text: 'Total Suspected',
    color: undefined,
  },
  countries: {
    icon: faGlobeAsia,
    text: 'Total Countries Infected',
    color: 'info',
  },
};

/**
 *
 * @param {{
 * type: 'confirmed' | 'recovered' | 'deaths' | 'suspected' | 'countries';
 * amount: number;
 * }}
 */
function Fact({ type, amount }) {
  const { text, icon, color } = metaMap[type];

  return (
    <>
      <dt className={classnames(styles.factDescription)}>{text}</dt>
      <dd className={classnames(styles.factAmount, color && `text-${color}`)}>
        <FontAwesomeIcon icon={icon} /> {amount.toLocaleString()}
      </dd>
    </>
  );
}

export default function QuickFacts({ data }) {
  return (
    <article className="col-12 text-center">
      <Card className={styles.card}>
        <CardBody>
          <CardTitle>
            <h1>Quick Facts</h1>
          </CardTitle>
          <CardSubtitle>
            <h6>Data is updated every 10 minutes</h6>
          </CardSubtitle>
          <dl>
            {Object.entries(data).map(([key, value]) => (
              <Fact type={key} amount={value} key={key} />
            ))}
          </dl>
        </CardBody>
      </Card>
    </article>
  );
}
