'use client';

import React, { useCallback, useState, useEffect } from 'react';

export default function FetchDataFromApi() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    console.log(json);
    setData(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.id}</li>;
          })}
      </ul>
    </div>
  );
}

// export const generateMetadata = () => {
//   return {
//     title: 'data fetching',
//     description: 'fetching data from an api',
//   };
// };
