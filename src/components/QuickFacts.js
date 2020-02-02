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
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import styles from './QuickFacts.module.scss';

/**
 *
 * @param {{
 * icon: import('@fortawesome/free-solid-svg-icons').IconDefinition;
 * amount: number;
 * description: string;
 * color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'muted' | 'white'
 * }}
 */
function Fact({ icon, amount, description, color }) {
  return (
    <>
      <dt className={classnames(styles.factDescription)}>{description}</dt>
      <dd className={classnames(styles.factAmount, color && `text-${color}`)}>
        <FontAwesomeIcon icon={icon} /> {amount.toLocaleString()}
      </dd>
    </>
  );
}

export default function QuickFacts() {
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
            <Fact
              icon={faCheck}
              amount={14641}
              description="Confirmed Cases"
              color="warning"
            />
            <Fact
              icon={faSkullCrossbones}
              amount={305}
              description="Total Deaths"
              color="danger"
            />
            <Fact
              icon={faHeartbeat}
              amount={328}
              description="Total Recovered"
              color="success"
            />
            <Fact
              icon={faQuestionCircle}
              amount={19544}
              description="Total suspected"
            />
            <Fact
              icon={faGlobeAsia}
              amount={23}
              description="Total Countries Infected"
              color="info"
            />
          </dl>
        </CardBody>
      </Card>
    </article>
  );
}
