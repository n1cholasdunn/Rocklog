import {type Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {type AppType} from 'next/app';
import {api} from '~/utils/api';
import '~/styles/globals.css';
import Layout from '~/components/Layout';
import LoginModal from '~/components/Modals/LoginModal';

const MyApp: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Layout>
        <div></div>
        <div>
          <LoginModal />
          {/* <RegisterModal /> */}
        </div>
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
