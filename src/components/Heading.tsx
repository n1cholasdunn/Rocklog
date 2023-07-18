type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const Heading: React.FC<HeadingProps> = ({title, subtitle, center}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold text-zinc-200">{title}</div>
      <div className="mt-2 font-light text-zinc-200">{subtitle}</div>
    </div>
  );
};

export default Heading;
