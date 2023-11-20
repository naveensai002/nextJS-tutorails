import Img from '@/public/img.jpg';
import Image from 'next/image';

export default function Login() {
  return (
    <div>
      Login page
      <Image src={Img} alt='image' className='h-32 w-32' />
    </div>
  );
}
export const generateMetadata = () => {
  return {
    title: 'Login/Register page',
    description: 'Welcome to the interface',
  };
};
