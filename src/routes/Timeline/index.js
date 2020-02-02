import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Card, CardFooter, CardBody } from 'reactstrap';

import { ExternalLink } from '../../components';

const dummyData = require('./api.json');

export default function Timeline() {
  const [data, setData] = useState(dummyData);

  // useEffect to load data

  return (
    <section>
      <h1>Coronavirus Timeline (GMT)</h1>
      {data.map(({ date, source, text }) => {
        const { host } = new URL(source);

        return (
          <article key={source}>
            <Card>
              <CardBody className="font-weight-bold text-white">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faBroadcastTower} color="#F65164" />{' '}
                  {text}
                </h5>
              </CardBody>
              <CardFooter>
                {/* todo: fix datetime */}
                <time dateTime={date}>{date}</time> via{' '}
                <ExternalLink href={source} text={host} />
              </CardFooter>
            </Card>
          </article>
        );
      })}
    </section>
  );
}
