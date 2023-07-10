import AvatarNav from './AvatarNav';
import Header from './Header';

const NavBar = () => {
  return (
    <>
      <div className="navbar flex justify-evenly">
        <Header />
        <AvatarNav />
      </div>
    </>
  );
};

export default NavBar;
