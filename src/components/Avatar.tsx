import Image from 'next/image';

type Props = {src: string | null | undefined};

const Avatar: React.FC<Props> = ({src}) => {
  return (
    <Image
      className="rounded-full"
      height={'45'}
      width={'45'}
      alt="Avatar"
      src={src || 'https://i.postimg.cc/WF02CYMW/placeholder.jpg'}
    />
  );
};

export default Avatar;
