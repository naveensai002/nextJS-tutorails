import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex justify-between'>
      <h1>Nanuana</h1>
      <div>
        <ul className='flex flex-row gap-12 mr-12'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/projects'>projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
