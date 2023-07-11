import Image from 'next/image';
import {useRouter} from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden cursor-pointer md:block"
      src="https://i.postimg.cc/44WH04kB/Screenshot-2023-06-13-at-5-45-40-PM.png"
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo;
