import React from 'react';
import { Card, ListGroup, CardHeader, CardBody, CardTitle } from 'reactstrap';

import { AmountInformationContainer } from '../../components';

export default function International({ data }) {
  return (
    <article className="col-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-center mb-0">
            <h1>International</h1>
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
