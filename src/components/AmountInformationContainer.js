import classnames from 'classnames';
import React from 'react';
import { ListGroupItem } from 'reactstrap';

import styles from './AmountInformationContainer.module.scss';
import ExternalLink from './ExternalLink';

/**
 *
 * @param {number} confirmed
 * @param {number} serious
 * @param {number} critical
 * @param {number} dead
 */
function getAmountInformationArray(confirmed, serious, critical, dead) {
  return [
    {
      color: 'yellow',
      description: 'confirmed',
      amount: confirmed,
      percent: undefined,
    },
    {
      color: 'warning',
      description: 'serious',
      amount: serious,
      percent: ((serious / confirmed) * 100).toFixed(2),
    },
    {
      color: 'orange',
      description: 'critical',
      amount: critical,
      percent: ((critical / confirmed) * 100).toFixed(2),
    },
    {
      color: 'danger',
      description: 'dead',
      amount: dead,
      percent: ((dead / confirmed) * 100).toFixed(2),
    },
  ];
}

function AmountInformation({ color, description, amount, percent }) {
  if (!amount) {
    return null;
  }

  return (
    <div className={classnames('mb-0', color && `text-${color}`)}>
      <span>{description}:</span>
      <span className="text-right">
        {amount.toLocaleString()} {percent && <span>({percent}%)</span>}
      </span>
    </div>
  );
}

export default function AmountInformationContainer({
  city,
  source,
  confirmed,
  serious,
  critical,
  dead,
}) {
  const { host } = new URL(source);

  return (
    <ListGroupItem>
      <article className={styles.article}>
        <div>
          <h6 className={styles.flexGrowOne}>{city}</h6>

          <ExternalLink className={styles.link} href={source} text={host} />
        </div>

        <div className={styles.amountInformationContainer}>
          {getAmountInformationArray(confirmed, serious, critical, dead).map(
            props => (
              <AmountInformation {...props} key={props.description} />
            ),
          )}
        </div>
      </article>
    </ListGroupItem>
  );
}
