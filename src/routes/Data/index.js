import React, { useState, useEffect } from 'react';

import QuickFacts from './QuickFacts';

const dummyData = {
  quickFacts: {
    confirmed: 14641,
    deaths: 305,
    recovered: 328,
    suspected: 19544,
    countries: 23,
  },
};

export default function Data() {
  const [data, setData] = useState(dummyData);

  // useEffect to get data

  return (
    <div className="row">
      <div className="col">
        <QuickFacts data={data.quickFacts} />
      </div>
    </div>
  );
}
