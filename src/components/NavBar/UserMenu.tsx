import {useCallback, useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {useRouter} from 'next/navigation';
import {signOut} from 'next-auth/react';
import useLoginModal from '~/hooks/useLoginModal';
import useRegisterModal from '~/hooks/useRegisterModal';
import {type SafeUser} from '~/types';

import UserMenuItem from './UserMenuItem';
import Avatar from '../Avatar';
import usePostModal from '~/hooks/usePostModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
  const router = useRouter();

  const postModal = usePostModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          flex
          cursor-pointer
          flex-row
          items-center
          gap-3
          rounded-full
          border-[1px]
          border-neutral-200
          p-4
          transition
          hover:shadow-md
          md:px-2
          md:py-1
          ">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            w-[40vw]
            overflow-hidden
            rounded-xl
            bg-white
            text-sm
            shadow-md
            md:w-3/4
          ">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <UserMenuItem
                  label="Create a Post"
                  onClick={postModal.onOpen}
                />
                <UserMenuItem
                  label="My posts"
                  onClick={() => router.push('/posts')}
                />
                <UserMenuItem
                  label="My favorites"
                  onClick={() => router.push('/favorites')}
                />
                <UserMenuItem
                  label="My Dream Destinations"
                  onClick={() => router.push('/destinations')}
                />
                <UserMenuItem
                  label="My Media"
                  onClick={() => router.push('/media')}
                />

                <hr />

                <UserMenuItem label="Logout" onClick={() => void signOut()} />
              </>
            ) : (
              <>
                <UserMenuItem label="Login" onClick={loginModal.onOpen} />
                <UserMenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
