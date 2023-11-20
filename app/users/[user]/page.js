'use client';

export default function SingleUser({ params }) {
  console.log(params);
  return <div>this is a single user page :{params.user}</div>;
}
