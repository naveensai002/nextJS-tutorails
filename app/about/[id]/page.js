import { redirect } from 'next/navigation';

export default function page({ params }) {
  if (params.id == 2) {
    redirect('/login');
  }
  return <div>{params.id}</div>;
}
