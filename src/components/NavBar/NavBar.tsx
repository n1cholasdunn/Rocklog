import {useSession} from 'next-auth/react';
import UserMenu from './UserMenu';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';

const NavBar = () => {
  const {data: sessionData} = useSession();
  const currentUser = sessionData?.user;
  return (
    <div className="  mb-5 w-full  shadow-sm ">
      <div
        className="
          border-b-[1px]
          border-zinc-400
          py-3
        ">
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          ">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
