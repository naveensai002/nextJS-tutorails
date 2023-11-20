import React from 'react';

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  // console.log(json);
  return json;
};

export default async function page() {
  const products = await fetchData();

  return (
    <div>
      {products?.map((item) => {
        // console.log(item);
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
          </ul>
        );
      })}
    </div>
  );
}
