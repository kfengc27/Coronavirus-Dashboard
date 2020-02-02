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
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from 'reactstrap';

import styles from './QuickFacts.module.scss';

const metaMap = {
  confirmed: {
    icon: faCheck,
    text: 'Confirmed cases',
    color: 'warning',
  },
  deaths: {
    icon: faSkullCrossbones,
    text: 'Total Deaths',
    color: 'danger',
  },
  recovered: {
    icon: faHeartbeat,
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
      <dt className={styles.factDescription}>{text}</dt>
      <dd
        className={classnames(
          'font-weight-bold',
          styles.factAmount,
          color && `text-${color}`,
        )}
      >
        <FontAwesomeIcon icon={icon} /> {amount.toLocaleString()}
      </dd>
    </>
  );
}

export default function QuickFacts({ data }) {
  return (
    <article className="col-12 text-center">
      <Card>
        <CardHeader>
          <CardTitle className="mb-0">
            <h1>Quick Facts</h1>
          </CardTitle>
        </CardHeader>
        <CardBody>
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
