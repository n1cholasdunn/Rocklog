import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';
import {signIn, signOut, useSession} from 'next-auth/react';
import Button from '../buttons/Button';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';
import {FaSignOutAlt} from 'react-icons/fa';

const AvatarNav = () => {
  const {data: sessionData} = useSession();
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={350}>
        <Tooltip.Trigger>
          <Avatar.Root>
            <Avatar.Image
              src={
                sessionData?.user
                  ? (sessionData?.user.image as string)
                  : 'https://i.postimg.cc/WF02CYMW/placeholder.jpg'
              }
              alt="User Profile Image"
            />
            <Avatar.Fallback />
          </Avatar.Root>
        </Tooltip.Trigger>

        <Tooltip.Content side="bottom" aria-label="login and logout buttons">
          {sessionData?.user ? (
            <div className="w-52">
              <Button
                outline
                label="Sign out"
                icon={FaSignOutAlt}
                onClick={() => void signOut()}
              />
            </div>
          ) : (
            <div>
              <Button
                outline
                label="Sign in with Google"
                icon={FcGoogle}
                onClick={() => void signIn('google')}
              />
              <Button
                outline
                label="Sign in with Github"
                icon={AiFillGithub}
                onClick={() => void signIn('github')}
              />
            </div>
          )}
          <Tooltip.Arrow className="mb-2" width={15} height={7} />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default AvatarNav;
