import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import ChineseMainland from './ChineseMainland';
import ChineseRegions from './ChineseRegions';
import International from './International';
import QuickFacts from './QuickFacts';

const dummyData = require('./api.json');

export default function Data() {
  const [data, setData] = useState(dummyData);

  // useEffect to get data

  return (
    <Row>
      <Col>
        <QuickFacts data={data.quickFacts} />
        <ChineseRegions data={data.chineseRegions} />
      </Col>
      <Col>
        <ChineseMainland data={data.chineseMainland} />
      </Col>
      <Col>
        <International data={data.international} />
      </Col>
    </Row>
  );
}
