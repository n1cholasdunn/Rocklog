import {signIn, signOut, useSession} from 'next-auth/react';

import React from 'react';

const Header = () => {
  const {data: sessionData} = useSession();

  return (
    <div className="flex-1 pl-5 text-3xl font-bold">
      {sessionData?.user?.name ? `Posts for ${sessionData.user.name}` : ''}
    </div>
  );
};
export default Header;
