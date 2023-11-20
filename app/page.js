'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className='grid place-items-center text-xl '>
      This is home page
      <button onClick={() => router.push('about')}>Go to the about page</button>
    </div>
  );
}
