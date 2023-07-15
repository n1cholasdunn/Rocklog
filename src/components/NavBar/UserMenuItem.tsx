type Props = {
  onClick: () => void;
  label: string;
};

const UserMenuItem: React.FC<Props> = ({onClick, label}) => {
  return (
    <div
      onClick={onClick}
      className="
        w-full
        px-3
        py-3
        font-semibold
        shadow
        transition
        hover:bg-zinc-500
      ">
      {label}
    </div>
  );
};

export default UserMenuItem;
