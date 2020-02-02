import React from 'react';
import { Card, CardBody, CardTitle, CardHeader, ListGroup } from 'reactstrap';

import { AmountInformationContainer } from '../../components';

export default function ChineseMainland({ data }) {
  return (
    <article className="col-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-center mb-0">
            <h1>Mainland China</h1>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <ListGroup>
            {data.map(props => (
              <AmountInformationContainer
                {...props}
                key={props.city.split(' ').join('-')}
              />
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </article>
  );
}
