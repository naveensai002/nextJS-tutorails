'use client';

import { usePathname } from 'next/navigation';

const layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <ul>
        <li>admin</li>
        <li>user</li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
