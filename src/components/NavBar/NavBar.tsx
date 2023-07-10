import AvatarNav from './AvatarNav';
import Header from './Header';
import {useSession} from 'next-auth/react';
import UserMenu from './UserMenu';

const NavBar = () => {
  const {data: sessionData} = useSession();
  const currentUser = sessionData?.user;
  return (
    <>
      <div className="navbar flex justify-evenly">
        <Header />
        {/* <AvatarNav /> */}
        <UserMenu currentUser={currentUser} />
      </div>
    </>
  );
};

export default NavBar;
